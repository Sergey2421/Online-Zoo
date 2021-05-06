const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const prev2 = document.querySelector('.prev2');
const next2 = document.querySelector('.next2');
const carousel = document.querySelectorAll('.picture');
const carousel2 = document.querySelector('.reviews');
const reviews = document.querySelectorAll('.review');
const markers = document.querySelectorAll('.markers');
const boxes = document.querySelectorAll('.box');
let offset = carousel.length / 2;
let first = 0;
let last = offset - 1;
let delay = 10000;
let click = false;

function auto() {
    delay = 10000;
    if (click) {
        clearTimeout(timerId);
        delay *= 2;
        click = false;
        timerId = setTimeout(auto, delay);
        return;
    }

    carousel2.firstElementChild.classList.add('invisible');
    carousel2.lastElementChild.previousElementSibling.classList.remove('invisible');
    carousel2.appendChild(carousel2.firstElementChild);

    timerId = setTimeout(auto, delay);
}

let timerId = setTimeout(auto, delay);


function SlideNext() {
    carousel[(first + offset - 2) % offset].classList.remove('visible');
    carousel[last].classList.add('visible');
    carousel[last].parentNode.insertBefore(carousel[last], carousel[first]);

    carousel[(first + offset - 2)  % offset + offset].classList.remove('visible');
    carousel[(last + offset)].classList.add('visible');
    carousel[(last + offset)].parentNode.insertBefore(carousel[(last + offset)], carousel[(first + offset)]);

    first += offset - 1;
    first %= offset;
    last += offset - 1;
    last %= offset;
}

function SlideBack() {
    carousel[first].classList.remove('visible');
    carousel[last].classList.add('visible');
    carousel[first].parentNode.appendChild(carousel[first]);

    carousel[(first + offset)].classList.remove('visible');
    carousel[(last + offset)].classList.add('visible');
    carousel[(first + offset)].parentNode.appendChild(carousel[(first + offset)]);

    first += 1;
    first %= offset;
    last += offset + 1;
    last %= offset;
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


prev.addEventListener('click', SlideBack);
next.addEventListener('click', SlideNext);
prev2.addEventListener('click', () => {
    carousel2.firstElementChild.classList.add('invisible');
    carousel2.lastElementChild.previousElementSibling.classList.remove('invisible');
    carousel2.appendChild(carousel2.firstElementChild);
    clearTimeout(timerId);
    delay *= 2;
    timerId = setTimeout(auto, delay);
});
next2.addEventListener('click', () => {
    carousel2.children[1].classList.add('invisible');
    carousel2.lastElementChild.classList.remove('invisible');
    carousel2.insertBefore(carousel2.lastElementChild, carousel2.firstElementChild);
    clearTimeout(timerId);
    delay *= 2;
    timerId = setTimeout(auto, delay);
});
reviews.forEach((elem) => elem.addEventListener('click', () => {
    click = true;
}));
markers.forEach((elem) => elem.addEventListener('click', () => ChangeMark(elem)));
