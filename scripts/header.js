// HTML 資料夾內第一層級的 header

document.writeln("<header>");
document.writeln("      <div class=\'logo\'>");
document.writeln("          <img src=\'\' alt=\'Logo\' id=\'Logo\'>");
document.writeln("          <span>狗來坐坐</span>");
document.writeln("      </div>");
document.writeln("      <div class=\'Lead_line\'>");
document.writeln("        <nav>");
document.writeln("          <a href=\'homepage.html\'>首頁</a> <!-- 指向首頁 -->");
document.writeln("          <a href=\'aboutus.html\'>關於我們</a> <!-- 指向關於我們 -->");
document.writeln("          <a href=\'dog_species.html\'>狗狗圖鑑</a> <!-- 指向成員介紹 -->");
document.writeln("          <a href=\'Petaurus.html\'>蜜袋鼯專區</a>");
document.writeln("        </nav>");
document.writeln("        <div class=\'theme-switch\'>");
document.writeln("          <label class=\'theme-label\' for=\'theme-toggle\'>深色模式</label>");
document.writeln("          <input type=\'checkbox\' id=\'theme-toggle\' />");
document.writeln("          <label for=\'theme-toggle\' class=\'slider\'></label>");
document.writeln("        </div>");
document.writeln("      </div>");
document.writeln("    </header>");