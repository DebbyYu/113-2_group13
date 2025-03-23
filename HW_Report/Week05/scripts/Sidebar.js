// 共用 Sidebar

document.writeln("<div class=\'sidebar\'>");
document.writeln("          <h2>狗狗品種</h2>");
document.writeln("          <ul>");
document.writeln("            <li onclick=\'buttonAction(\'Poodle\')\'><a>貴賓狗</a></li>   ");
document.writeln("            <li onclick=\'buttonAction(\'Chihuahua\')\'><a>吉娃娃</a></li>  ");
document.writeln("            <li onclick=\'buttonAction(\'Pomeranian\')\'><a>博美</a></li>  ");
document.writeln("            <li onclick=\'buttonAction(\'Bichon_Frise\')\'><a>比熊犬</a></li>");
document.writeln("            <li onclick=\'buttonAction(\'Shiba_Inu\')\'><a>柴犬</a></li>");
document.writeln("            <li onclick=\'buttonAction(\'Akita_Inu\')\'><a>秋田犬</a></li>");
document.writeln("          </ul>");
document.writeln("        </div>");

const  buttonAction = (buttonName) => {
    // window.location.href = "./" + buttonName + ".html";
    window.location.href = "./Dogpedia.html";
}

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
