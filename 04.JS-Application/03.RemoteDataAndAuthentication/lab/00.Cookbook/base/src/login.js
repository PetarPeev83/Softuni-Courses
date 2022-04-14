window.addEventListener('load', async () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', onLogin);

    // console.log('works');
});
async function onLogin(event) {
    const url = 'http://localhost:3030/users/login';
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    try {
        const resp = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (resp.ok != true) {
            const error = await resp.json();
            throw new Error(error.message);
        };

        const data = await resp.json();
        const token = data.accessToken;

        localStorage.setItem('token', token);

        window.location = '/index.html';

    } catch (error) {
        alert(error.message);
    };
    // console.log(email, pass, rePass);
};