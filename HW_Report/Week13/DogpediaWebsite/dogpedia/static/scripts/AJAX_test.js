// dog card ajax test

document.addEventListener("DOMContentLoaded", function () {
    const grid = document.getElementById("card-grid");
    let currentPage = 1;
    let isLoading = false;
    let breed = new URLSearchParams(window.location.search).get('breed') || 'Poodle';
    let hasNext = true;
    const initialLoadCount = 6; // 初始載入的狗狗數量

    function loadDogs(page, initialLoad = false) {
        if (isLoading || (!hasNext && !initialLoad)) {
            return;
        }
        isLoading = true;

        const apiUrl = '/load_more_animals/'; // 替換為你的後端 API URL
        const queryParams = { breed: breed, page: page, limit: 6, csrfmiddlewaretoken:$('[name="csrfmiddlewaretoken"]').val() };
        if (initialLoad) {
            queryParams.limit = initialLoadCount; // 傳遞初始載入數量
        }

        $.ajax({
            url: '',
            type: 'POST',
            data: queryParams,
            dataType: 'json',
            success: function (data) {
                if (data.animals && data.animals.length > 0) {
                    data.animals.forEach(dog => {
                        const card = document.createElement("div");
                        card.className = "card";
                        card.innerHTML = `
                            <img src="${dog.image_url}" alt="${dog.name}" />
                            <a class="id">${dog.id}</a>
                            <h2>${dog.name}</h2>
                            <div class="description">
                                <p><strong>家庭生活:</strong> ${dog.description[0]}</p>
                                <p><strong>興趣:</strong> ${dog.description[1]}</p>
                                <p><strong>特色:</strong> ${dog.description[2]}</p>
                                <p><strong>飼養須知:</strong> ${dog.description[3]}</p>
                                <p>點我看更多</p>
                            </div>`;
                        grid.appendChild(card);
                    });
                    hasNext = data.has_next;
                    isLoading = false;
                    if (initialLoad && hasNext) {
                        currentPage++; // 初始載入後，如果還有下一頁，準備載入下一頁
                    } else if (!initialLoad) {
                        if (hasNext) {
                            currentPage++;
                        }
                    }
                } else {
                    hasNext = false;
                    isLoading = false;
                    // 可選：顯示 "沒有更多動物了" 的訊息
                }
            },
            error: function (error) {
                console.error('載入更多動物時發生錯誤:', error);
                isLoading = false;
                // 處理錯誤情況
            }
        });
    }

    // 初始載入前 initialLoadCount 隻狗狗
    loadDogs(currentPage, true);

    // 滾動事件監聽器
    window.addEventListener('scroll', function() {
        if (window.scrollY + window.innerHeight > document.documentElement.scrollHeight - 200 && !isLoading && hasNext) {
            loadDogs(currentPage);
        }
    });
});