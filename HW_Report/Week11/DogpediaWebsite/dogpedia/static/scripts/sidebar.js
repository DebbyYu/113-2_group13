const buttonAction = (breed) => {
    // ✅ 加上網址參數切換品種
    window.location.href = "./dogs?breed=" + encodeURIComponent(breed);
};


// 直到滑鼠游標移到 h2 前不會顯示 List
const List = document.querySelectorAll(".sidebar ul li");
const H = document.querySelector(".sidebar h2");
const Sidebar = document.querySelector(".sidebar");

H.addEventListener("mouseenter", () => {
    List.forEach((element) => {
        element.classList.add("show");
    })
    document.querySelector(".sidebar ul").classList.add("show");
    document.querySelector(".sidebar h2").classList.add("show");
    Sidebar.addEventListener("mouseleave", () => {
        List.forEach((element) => {
            element.classList.remove("show");
        })
        document.querySelector(".sidebar ul").classList.remove("show");
        document.querySelector(".sidebar h2").classList.remove("show");
    })
})
