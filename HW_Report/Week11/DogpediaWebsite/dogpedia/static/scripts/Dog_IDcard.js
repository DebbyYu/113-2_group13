document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const expandedTitle = document.getElementById("expanded-title");
    const closeButton = document.querySelector(".close-btn");
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");
    const grid = document.getElementById("card-grid");

    grid.addEventListener("click", function (event) {
        const card = event.target.closest(".card");
        if (!card) return;

        const petId = card.dataset.petId;
        const title = card.querySelector("h2").textContent;
        const descriptions = card.querySelector(".description").querySelectorAll("p");

        expandedTitle.textContent = title;
        document.getElementById("profile-content").innerHTML = descriptions[0].innerHTML;
        document.getElementById("interest-content").innerHTML = descriptions[1].innerHTML;
        document.getElementById("traits-content").innerHTML = descriptions[2].innerHTML;
        document.getElementById("care-content").innerHTML = descriptions[3].innerHTML;

        overlay.classList.add("show");
        loadComments(petId); // 加載評論
        createCommentForm(petId); // 創建評論表單
    });

    function loadComments(petId) {
        const commentsContainerId = 'comments-container';
        let commentsContainer = document.getElementById(commentsContainerId);
        if (!commentsContainer) {
            commentsContainer = document.createElement('div');
            commentsContainer.id = commentsContainerId;
            overlay.appendChild(commentsContainer);
        }
        commentsContainer.innerHTML = '<h3>心情小語載入中...</h3>';
        fetch(`/pet/${petId}/comments/`)
            .then(response => response.json())
            .then(data => {
                const comments = JSON.parse(data.comments);
                displayCommentsData(comments, commentsContainer);
            })
            .catch(error => {
                commentsContainer.innerHTML = '<p>載入心情小語失敗。</p>';
                console.error("載入心情小語錯誤:", error);
            });
    }

    function displayCommentsData(comments, container) {
        container.innerHTML = '<h3>心情小語</h3>';
        if (comments.length > 0) {
            const ul = document.createElement('ul');
            comments.forEach(comment => {
                const li = document.createElement('li');
                li.innerHTML = `<p>${comment.fields.user__username} 說：${comment.fields.text}</p><small>發布於 ${new Date(comment.fields.created_at).toLocaleString()}</small>`;
                ul.appendChild(li);
            });
            container.appendChild(ul);
        } else {
            container.innerHTML += '<p>還沒有任何心情小語。</p>';
        }
    }

    function createCommentForm(petId) {
        let commentFormContainer = document.getElementById('comment-form-container');
        if (!commentFormContainer) {
            commentFormContainer = document.createElement('div');
            commentFormContainer.id = 'comment-form-container';
            overlay.appendChild(commentFormContainer);
        }
        commentFormContainer.innerHTML = `
            <h3>留下你的心情小語</h3>
            <textarea id="comment-text" rows="3" cols="50" placeholder="留下你的心情小語..."></textarea>
            <button type="button" onclick="submitComment('${petId}')">發布</button>
        `;
    }

    window.submitComment = function(petId) {
        const commentText = document.getElementById('comment-text').value;
        fetch(`/pet/${petId}/add_comment_ajax/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify({ text: commentText })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                loadComments(petId); // 重新加載評論
                document.getElementById('comment-text').value = ''; // 清空輸入框
            } else {
                alert(data.message || '發布評論失敗');
            }
        })
        .catch(error => {
            alert('發布評論時發生錯誤。');
            console.error("發布評論錯誤:", error);
        });
    };

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                if (cookie.startsWith(name + '=')) {
                    cookieValue = cookie.substring(name.length + 1);
                    break;
                }
            }
        }
        return cookieValue;
    }

    // 切換 tab 內容
    tabButtons.forEach(button => {
        button.addEventListener("click", function () {
            tabButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            tabContents.forEach(content => (content.style.display = "none"));
            const selectedTab = this.getAttribute("data-tab");
            document.getElementById(selectedTab + "-content").style.display = "block";
        });
    });

    // 關閉視窗
    closeButton.addEventListener("click", function () {
        overlay.classList.remove("show");
        const commentsContainer = document.getElementById('comments-container');
        const commentFormContainer = document.getElementById('comment-form-container');
        if (commentsContainer) commentsContainer.remove();
        if (commentFormContainer) commentFormContainer.remove();
    });

    overlay.addEventListener("click", function (event) {
        if (event.target === overlay) {
            overlay.classList.remove("show");
            const commentsContainer = document.getElementById('comments-container');
            const commentFormContainer = document.getElementById('comment-form-container');
            if (commentsContainer) commentsContainer.remove();
            if (commentFormContainer) commentFormContainer.remove();
        }
    });
});