window.addEventListener("DOMContentLoaded", () => {
	const access = localStorage.getItem("access");
	const addDogBtn = document.getElementById("add-dog-btn");
	const loginBtn = document.getElementById("login-btn");
	const logoutBtn = document.getElementById("logout-btn");
	const registerBtn = document.getElementById("register-btn");

	if (access) {
		if (addDogBtn) addDogBtn.style.display = "inline";
		if (logoutBtn) logoutBtn.style.display = "inline";
		if (loginBtn) loginBtn.style.display = "none";
		if (registerBtn) registerBtn.style.display = "none";
	} else {
		if (addDogBtn) addDogBtn.style.display = "none";
		if (logoutBtn) logoutBtn.style.display = "none";
		if (loginBtn) loginBtn.style.display = "inline";
		if (registerBtn) registerBtn.style.display = "inline";
	}

	if (addDogBtn) {
		addDogBtn.onclick = () => {
			window.location.href = "/dogpedia/upload_pet/";
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

// Darkmode for header
function loadTheme() {
    const darkMode = localStorage.getItem("darkMode");
    const isDarkMode = darkMode === "enabled";
    document.getElementById("theme-toggle").checked = isDarkMode;
  
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }
  
  document.getElementById("theme-toggle").addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  });
  
  loadTheme();
  