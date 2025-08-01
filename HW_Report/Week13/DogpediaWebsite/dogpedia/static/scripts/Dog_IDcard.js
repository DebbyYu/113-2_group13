document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const expandedTitle = document.getElementById("expanded-title");
    const closeButton = document.querySelector(".close-btn");
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");
    const grid = document.getElementById("card-grid");
    const commentspart = document.getElementById("comments-part");

    grid.addEventListener("click", function (event) {
        const card = event.target.closest(".card");
        if (!card) return;

        const petId = card.querySelector("a").textContent;
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

    async function loadComments(petId) {
        const csrftoken = $('[name="csrfmiddlewaretoken"]').val();
        // console.log(csrftoken)
        const commentsContainerId = 'comments-container';
        let commentsContainer = document.getElementById(commentsContainerId);
        if (!commentsContainer) {
            commentsContainer = document.createElement('div');
            commentsContainer.id = commentsContainerId;
            commentspart.appendChild(commentsContainer);
        }
        commentsContainer.innerHTML = '<h3>心情小語載入中...</h3>';

        const request = new Request(
            `/dogpedia/pet/comments/dog_id=${petId}`,
            {
                method: 'POST',
                headers: {'X-CSRFToken': csrftoken},
                mode: 'same-origin' // Do not send CSRF token to another domain.
            }
        );
        const res = await fetch(request)
        if(res.ok){
            console.log(res);
            const data = await res.json();
            console.log(data);
            console.log(data.comments);
            comments = data.comments;

            displayCommentsData(comments, commentsContainer);
        }
        else{
            commentsContainer.innerHTML = '<p>載入心情小語失敗。</p>';
            console.error("載入心情小語錯誤:", error);
        }
            
            // .then(data => {
            //     const comments = JSON.parse(data.comments);
            //     displayCommentsData(comments, commentsContainer);
            // })
            // .catch(error => {
            //     commentsContainer.innerHTML = '<p>載入心情小語失敗。</p>';
            //     console.error("載入心情小語錯誤:", error);
            // });
    }

    function displayCommentsData(comments, container) {
        container.innerHTML = '';
        if(comments[0].user == -1){
            container.innerHTML += '<p class="nothing">還沒有任何心情小語。</p>';
        }
        else if (comments.length > 0) {
            const ul = document.createElement('ul');
            comments.forEach(comment => {
                const li = document.createElement('li');
                li.innerHTML = `<p>${comment.user} 說：${comment.comment_text}</p><small>發布於 ${new Date(comment.created_at).toLocaleString()}</small>`;
                ul.appendChild(li);
            });
            container.appendChild(ul);
        }
    }

    function createCommentForm(petId) {
        let commentFormContainer = document.getElementById('comment-form-container');
        if (!commentFormContainer) {
            commentFormContainer = document.createElement('div');
            commentFormContainer.id = 'comment-form-container';
            commentspart.appendChild(commentFormContainer);
        }
        commentFormContainer.innerHTML = `
            <h3>留下你的心情小語</h3>
            <textarea id="comment-text" rows="3" cols="50" placeholder="留下你的心情小語..."></textarea>
            <button id ="comment-sub" type="button" onclick="submitComment('${petId}')">發布</button>
        `;
        const token = localStorage.getItem('access');
        if (!token){
            document.getElementById('comment-text').setAttribute("disabled","disabled");
            document.getElementById('comment-text').setAttribute("placeholder", "登入來發表你的心情小語");
            document.getElementById('comment-sub').setAttribute("disabled","disabled");
        }
        else{
            document.getElementById('comment-text').removeAttribute("disabled");
            document.getElementById('comment-sub').removeAttribute("disabled");
        }
    }

    window.submitComment = function(petId) {
        const commentText = document.getElementById('comment-text').value;
        var getData = localStorage.getItem('access');
        // var getDataArr = JSON.parse(getData);
        const token = String(localStorage.getItem('access'));
        console.log(token);
        const userdata = JSON.parse(atob(token.split('.')[1]));
        const request = new Request(
            `/dogpedia/pet/add_comment_ajax/dog_id=${petId}`,
            {
                method: 'POST',
                headers: {'X-CSRFToken': getCookie('csrftoken')},
                mode: 'same-origin', // Do not send CSRF token to another domain.
                body: JSON.stringify({ user: userdata.username, text: commentText })
            }
        );
        fetch(request)
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