window.addEventListener("DOMContentLoaded", () => {
  const access = localStorage.getItem("access");
  const addDogBtn = document.getElementById("add-dog-btn");
  const loginBtn = document.getElementById("login-btn");
  const logoutBtn = document.getElementById("logout-btn");
  const registerBtn = document.getElementById("register-btn"); // 👈 新增這行

  if (access) {
    if (addDogBtn) addDogBtn.style.display = "inline";
    if (logoutBtn) logoutBtn.style.display = "inline";
    if (loginBtn) loginBtn.style.display = "none";
    if (registerBtn) registerBtn.style.display = "none"; // 👈 隱藏註冊
  } else {
    if (addDogBtn) addDogBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "none";
    if (loginBtn) loginBtn.style.display = "inline";
    if (registerBtn) registerBtn.style.display = "inline"; // 👈 顯示註冊
  }

  if (addDogBtn) {
    addDogBtn.onclick = () => {
      window.location.href = "/dogpedia/add-dog/";
    };
  }

  if (logoutBtn) {
    logoutBtn.onclick = async () => {
      const refresh = localStorage.getItem("refresh");
      try {
        await fetch("/dogpedia/api/logout/", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${access}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refresh }),
        });
      } catch (err) {
        console.log("登出時發生錯誤（但仍會清除 token）");
      }
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      alert("已登出");
      window.location.href = "/dogpedia/";
    };
  }
});
