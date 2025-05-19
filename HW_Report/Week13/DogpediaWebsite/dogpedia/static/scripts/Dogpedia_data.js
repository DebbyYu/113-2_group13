// Show dog card
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const breed = urlParams.get('breed') || 'Poodle';
    const dogList = dogData[breed] || [];

    const grid = document.getElementById("card-grid");
    grid.innerHTML = "";

    dogList.forEach(name => {
        const dog = dogInfo[name];
        const description = dog.description;
        const imgSrc = dog.imgSrc;

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <img src="${imgSrc}" alt=${name} />
        <h2>${name}</h2>
        <div class="description">
          <p><strong>家庭生活:</strong> ${description[0]}</p>
          <p><strong>興趣:</strong> ${description[1]}</p>
          <p><strong>特色:</strong> ${description[2]}</p>
          <p><strong>飼養須知:</strong> ${description[3]}</p>
          <p>點我看更多</p>
        </div>`;
        grid.appendChild(card);
    });
});
