var filledEmailOrTelefone = false;

document.getElementById('emailORtelefone').oninput = function() {
    checkInputFilled();
};

function checkInputFilled() {
    var inputField = document.getElementById('emailORtelefone');
    var button = document.getElementById('button');

    filledEmailOrTelefone = inputField.value.trim() !== '';

    if (filledEmailOrTelefone) {
        button.style.backgroundColor = '#FF4655';
        button.disabled = false;
    } else {
        button.style.backgroundColor = 'white';
        button.disabled = true;
    }
}