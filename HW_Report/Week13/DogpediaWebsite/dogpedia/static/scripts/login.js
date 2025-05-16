document.getElementById('login-form').addEventListener('submit', async function (e) {
	e.preventDefault();
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	const res = await fetch('/dogpedia/api/token/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username, password })
	});

	const data = await res.json();
	const msgEl = document.getElementById('msg');

	if (res.ok) {
		localStorage.setItem('access', data.access);
		localStorage.setItem('refresh', data.refresh);
		msgEl.className = 'success';
		msgEl.innerText = '登入成功，跳轉中...';
		setTimeout(() => {
			window.location.href = '/dogpedia/';
		}, 1000);
	} else {
		msgEl.className = 'error';
		msgEl.innerText = '登入失敗：' + (data.detail || '請確認帳號密碼');
	}
});
