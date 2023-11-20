var clickedElement1 = false;
var clickedElement2 = false;

document.getElementById('email').onclick = function() {
    clickedElement1 = true;
    checkBothElementsClicked();
};

document.getElementById('senha').onclick = function() {
    clickedElement2 = true;
    checkBothElementsClicked();
};

function checkBothElementsClicked() {
    var button = document.querySelector(".custom-button");

    if (clickedElement1 && clickedElement2) {
        button.style.backgroundColor = '#FF4655';
        button.style.color = '#000000';

    } else {
        button.style.backgroundColor = 'white';
        button.style.color = '#000000';
    }
}