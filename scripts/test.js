// 共用 Sidebar

const  buttonAction = (buttonName) => {
    // window.location.href = "./" + buttonName + ".html";
    window.location.href = "./Dogpedia.html";
}

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
