const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const carousel = document.querySelectorAll('.picture');
let offset = carousel.length / 2;
let i = 0;
let j = offset - 1;

function SlideNext() {
    carousel[(i + offset - 2) % offset].classList.remove('visible');
    carousel[j].classList.add('visible');
    carousel[j].parentNode.insertBefore(carousel[j], carousel[i]);

    carousel[(i + offset - 2)  % offset + offset].classList.remove('visible');
    carousel[(j + offset)].classList.add('visible');
    carousel[(j + offset)].parentNode.insertBefore(carousel[(j + offset)], carousel[(i + offset)]);

    i += offset - 1;
    i %= offset;
    j += offset - 1;
    j %= offset;
}

function SlideBack() {
    carousel[i].classList.remove('visible');
    carousel[j].classList.add('visible');
    carousel[i].parentNode.appendChild(carousel[i]);

    carousel[(i + offset)].classList.remove('visible');
    carousel[(j + offset)].classList.add('visible');
    carousel[(i + offset)].parentNode.appendChild(carousel[(i + offset)]);

    i += 1;
    i %= offset;
    j += offset + 1;
    j %= offset;
}

prev.addEventListener('click', SlideBack);
next.addEventListener('click', SlideNext);
