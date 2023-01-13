const input = document.querySelector('#validation-input');

function onTypingBorderColor () {
if (input.value.length === Number(input.getAttribute('data-length'))) {
    input.classList.add('valid');
    input.classList.remove('invalid');
} else {
    input.classList.add('invalid');
    input.classList.remove('valid');
}
};

input.addEventListener('blur', onTypingBorderColor);

