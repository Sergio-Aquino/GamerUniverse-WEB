var filledNome = false;
var filledCpf = false;
var filledTelefone = false;
var filledEmail = false;
var filledCep = false;
var filledNumero = false;
var filledSenha = false;

document.getElementById('nome').oninput = function() {
    checkFormFilled();
};

document.getElementById('cpf').oninput = function() {
    checkFormFilled();
};

document.getElementById('telefone').oninput = function() {
    checkFormFilled();
};

document.getElementById('email').oninput = function() {
    checkFormFilled();
};

document.getElementById('cep').oninput = function() {
    checkFormFilled();
};

document.getElementById('numero').oninput = function() {
    checkFormFilled();
};

document.getElementById('senha').oninput = function() {
    checkFormFilled();
};

function checkFormFilled() {
    var button = document.getElementById('button');

    filledNome = document.getElementById('nome').value.trim() !== '';
    filledCpf = document.getElementById('cpf').value.trim() !== '';
    filledTelefone = document.getElementById('telefone').value.trim() !== '';
    filledEmail = document.getElementById('email').value.trim() !== '';
    filledCep = document.getElementById('cep').value.trim() !== '';
    filledNumero = document.getElementById('numero').value.trim() !== '';
    filledSenha = document.getElementById('senha').value.trim() !== '';

    if (filledNome && filledCpf && filledTelefone && filledEmail && filledCep && filledNumero && filledSenha) {
        button.style.backgroundColor = '#FF4655';
        button.disabled = false;
    } else {
        button.style.backgroundColor = 'white';
        button.disabled = true;
    }
}