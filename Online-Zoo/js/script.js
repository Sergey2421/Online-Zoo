let spoiler = document.querySelectorAll('.spoiler');

spoiler.forEach((elem) => elem.addEventListener('click', function (e) {
    e.preventDefault();
    elem.parentElement.lastElementChild.classList.toggle('spoiler-text');
    elem.lastElementChild.textContent === '+' ? elem.lastElementChild.textContent = '\u2013' : elem.lastElementChild.textContent = '+';
}));

