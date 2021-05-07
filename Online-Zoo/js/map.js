const markers = document.querySelectorAll('.markers');
const boxes = document.querySelectorAll('.box');
const main = document.querySelector('.main');
const btns = document.querySelectorAll('.nav_btns');

function ResetMark(elem) {
    if (elem.contains(main) || elem === main) {
        markers.forEach((elem) => elem.classList.remove('active'));
        boxes.forEach((e) => e.classList.add('invisible'));
        btns.forEach((elem) => elem.classList.remove('active_logo'));
    }
}

function ChangeMark(elem) {
    markers.forEach((elem) => elem.classList.remove('active'));
    btns.forEach((elem) => elem.classList.remove('active_logo'));
    boxes.forEach((e) => e.classList.add('invisible'));
    elem.classList.add('active');
    if (elem.parentElement.classList.contains('mark-eagle')) {
        btns[2].classList.add('active_logo');
        boxes[0].classList.remove('invisible');
    } else if (elem.parentElement.classList.contains('mark-gorilla')) {
        btns[3].classList.add('active_logo');
        boxes[1].classList.remove('invisible');
    } else if (elem.parentElement.classList.contains('mark-panda')) {
        btns[0].classList.add('active_logo');
        boxes[2].classList.remove('invisible');
    } else {
        btns[1].classList.add('active_logo');
        boxes[3].classList.remove('invisible');
    }
}

markers.forEach((elem) => elem.addEventListener('click', () => ChangeMark(elem)));
document.addEventListener('click', (event) => ResetMark(event.target));
