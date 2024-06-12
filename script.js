document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    if (username === 'admin' && password === 'admin123') {
        errorMessage.innerText = '';
        window.location.href = 'ocorrencia.html';
    } else {
        errorMessage.innerText = 'Usuário ou senha incorretos. Por favor, tente novamente.';
    }
});
