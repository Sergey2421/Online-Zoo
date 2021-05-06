const markers = document.querySelectorAll('.markers');
const boxes = document.querySelectorAll('.box');
const main = document.querySelector('.main');

function ResetMark(elem) {
    if (elem.contains(main) || elem === main) {
        markers.forEach((elem) => elem.classList.remove('active'));
        boxes.forEach((e) => e.classList.add('invisible'));
    }
}

function ChangeMark(elem) {
    markers.forEach((elem) => elem.classList.remove('active'));
    elem.classList.add('active');
    if (elem.parentElement.classList.contains('mark-eagle')) {
        boxes.forEach((e) => e.classList.add('invisible'));
        boxes[0].classList.remove('invisible');
    } else if (elem.parentElement.classList.contains('mark-gorilla')) {
        boxes.forEach((e) => e.classList.add('invisible'));
        boxes[1].classList.remove('invisible');
    } else if (elem.parentElement.classList.contains('mark-panda')) {
        boxes.forEach((e) => e.classList.add('invisible'));
        boxes[2].classList.remove('invisible');
    } else {
        boxes.forEach((e) => e.classList.add('invisible'));
        boxes[3].classList.remove('invisible');
    }
}

markers.forEach((elem) => elem.addEventListener('click', () => ChangeMark(elem)));
document.addEventListener('click', (event) => ResetMark(event.target));
