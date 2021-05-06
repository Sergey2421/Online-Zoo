let main = document.querySelector('.main_camera');
const cameras = document.querySelectorAll('.camera');
let spoiler = document.querySelectorAll('.spoiler');

function Swap(element) {
    element.insertBefore(main.lastElementChild, element.lastElementChild);
    main.appendChild(element.firstElementChild);
    /*main.lastElementChild.classList.toggle('w-1064 h-600 br-5 w-328 h-184');*/
    main.lastElementChild.classList.toggle('w-1064');
    main.lastElementChild.classList.toggle('h-600');
    main.lastElementChild.classList.toggle('br-5');
    main.lastElementChild.classList.toggle('w-328');
    main.lastElementChild.classList.toggle('h-184');
    /*element.firstElementChild.classList.toggle('w-1064 h-600 br-5 w-328 h-184');*/
    element.firstElementChild.classList.toggle('w-1064');
    element.firstElementChild.classList.toggle('h-600');
    element.firstElementChild.classList.toggle('br-5');
    element.firstElementChild.classList.toggle('w-328');
    element.firstElementChild.classList.toggle('h-184');
}

spoiler.forEach((elem) => elem.addEventListener('click', function (e) {
    e.preventDefault();
    elem.classList.toggle('color-darkpurple');
    elem.classList.toggle('color-blue');
    elem.parentElement.lastElementChild.classList.toggle('spoiler-text');
    elem.lastElementChild.textContent === '+' ? elem.lastElementChild.textContent = '\u2013' : elem.lastElementChild.textContent = '+';
}));
cameras.forEach((elem) => elem.addEventListener('click', () => Swap(elem)));
