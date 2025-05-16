document.getElementById('register-form').addEventListener('submit', async function (e) {
	e.preventDefault();

	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	const confirmPassword = document.getElementById('confirm-password').value;
	const msgEl = document.getElementById('msg');

	if (password !== confirmPassword) {
		msgEl.className = 'error';
		msgEl.innerText = '❌ 密碼不一致';
		return;
	}

	const res = await fetch('/dogpedia/register-api/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username, password })
	});

	const data = await res.json();

	if (res.ok) {
		msgEl.className = 'success';
		msgEl.innerText = '✅ 註冊成功，正在跳轉登入頁...';
		setTimeout(() => {
			window.location.href = '/dogpedia/login/';
		}, 1200);
	} else {
		msgEl.className = 'error';
		msgEl.innerText = '❌ 註冊失敗：' + (data.detail || data.error || '請檢查帳號是否已存在');
	}
});
