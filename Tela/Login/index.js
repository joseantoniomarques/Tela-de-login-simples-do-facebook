const form = document.getElementById('form');
const required = document.querySelectorAll('.required');
const span = document.querySelectorAll('.span-login');
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;

function insertError(index) {
    required[index].style.border = '2.5px solid #e63636';
    span[index].style.display = 'block';
}

function removeError(index) {
    required[index].style.border = '';
    span[index].style.display = 'none';
}

function emailRequired() {
    if(!emailRegex.test(required[0].value)) {
        insertError(0);
    } else {
        removeError(0);
    }
}

function passwordRequired() {
    if(required[1].value.length < 8) {
        insertError(1);
    } else {
        removeError(1);
    }
}