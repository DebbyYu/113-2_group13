document.addEventListener("DOMContentLoaded", function () {
    // 從 template 中取得 JSON 資料
    const dogList = JSON.parse(document.getElementById('dog-list-data').textContent);

    const grid = document.getElementById("card-grid");
    grid.innerHTML = "";

    dogList.forEach(dog => {
        const card = document.createElement("div");
        card.className = "card";
        card.setAttribute("data-name", dog.name);
        card.innerHTML = `
            <img src="${dog.image}" alt="${dog.name}">
            <h2>${dog.name}</h2>
            <div class="description" style="display:none">
                <p>${dog.profile}</p>
                <p>${dog.interests}</p>
                <p>${dog.traits}</p>
                <p>${dog.care}</p>
            </div>
            <button class="more-btn">點我看更多</button>
        `;
        grid.appendChild(card);
    });

    // 重點在此：生成卡片後，檢查並呼叫 setupCardEvents
    if (window.setupCardEvents) {
        window.setupCardEvents();
    }
});
