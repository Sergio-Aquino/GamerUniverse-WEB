var filledEmail = false;
var filledSenha = false;

document.getElementById('email').oninput = function() {
    checkBothInputsFilled();
};

document.getElementById('senha').oninput = function() {
    checkBothInputsFilled();
};

function checkBothInputsFilled() {
    var emailInput = document.getElementById('email');
    var senhaInput = document.getElementById('senha');
    var button = document.getElementById('button');

    filledEmail = emailInput.value.trim() !== '';
    filledSenha = senhaInput.value.trim() !== '';

    if (filledEmail && filledSenha) {
        button.style.backgroundColor = '#FF4655';
        button.disabled = false;
    } else {
        button.style.backgroundColor = 'white';
        button.disabled = true;
    }
}