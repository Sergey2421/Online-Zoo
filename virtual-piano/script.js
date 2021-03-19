const btn_notes = document.querySelector('.btn-notes');
const btn_letters = document.querySelector('.btn-letters');
const piano_keys = document.querySelectorAll('.piano-key');
const btn_fullscreen = document.querySelector('.fullscreen');
const piano = document.querySelector('.piano');

let isDown = false;

const keysMap = {
    'KeyD' : piano_keys[0],
    'KeyF' : piano_keys[1],
    'KeyG' : piano_keys[2],
    'KeyH' : piano_keys[3],
    'KeyJ' : piano_keys[4],
    'KeyK' : piano_keys[5],
    'KeyL' : piano_keys[6],
    'KeyR' : piano_keys[7],
    'KeyT' : piano_keys[8],
    'KeyU' : piano_keys[10],
    'KeyI' : piano_keys[11],
    'KeyO' : piano_keys[12]
}

function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}

function activateBtn(btnForOn, btnForOff) {
    if (!btnForOn.classList.contains('btn-active')) {
        btnForOn.classList.add('btn-active');
        btnForOff.classList.remove('btn-active');
        piano_keys.forEach(function (elem) {
            elem.classList.toggle('piano-key-letter');
        })
    }
}

function switchFullsceen(btn) {
    if (btn.classList.contains('openfullscreen')) {
        document.body.requestFullscreen();
        btn.classList.toggle('openfullscreen');
    } else {
        document.exitFullscreen();
        btn.classList.toggle('openfullscreen');
    }
}

function activateKey(elem) {
    elem.classList.remove('piano-key-remove-mouse');
    elem.classList.add('piano-key-active');
    elem.classList.add('piano-key-active-pseudo');
    const note = elem.dataset.note;
    const src = `assets/audio/${note}.mp3`;
    playAudio(src);
    elem.addEventListener('mouseout', () => {
        if (elem.classList.contains('piano-key')) {
            elem.classList.remove('piano-key-active');
            elem.classList.remove('piano-key-active-pseudo');
            elem.classList.add('piano-key-remove-mouse');
        }
    });
}

function mouseOver(elem) {
    if (elem.classList.contains('piano-key')) {
        if (isDown) {
            activateKey(elem);
        }
        elem.classList.add('piano-key-remove-mouse');
    }
}

function mouseDown(elem) {
    if (elem.classList.contains('piano-key')) {
        isDown = true;
        activateKey(elem);
    }
}

function mouseUp(elem) {
        isDown = false;
        elem.classList.remove('piano-key-active');
        elem.classList.remove('piano-key-active-pseudo');
        if (elem.classList.contains('piano-key')) {
            elem.classList.add('piano-key-remove-mouse');
        }
}

function keyDown(event) {
    if(!event.repeat) {
        if(event.code in keysMap) {
        keysMap[event.code].classList.remove('piano-key-remove-mouse');
        keysMap[event.code].classList.add('piano-key-active');
        const note = keysMap[event.code].dataset.note;
        const src = `assets/audio/${note}.mp3`;
        playAudio(src);
        }
    }
}

function keyUp(event) {
    if(event.code in keysMap) {
        keysMap[event.code].classList.add('piano-key-remove-mouse');
        keysMap[event.code].classList.remove('piano-key-active');
    }
}

btn_fullscreen.addEventListener('click', () => switchFullsceen(btn_fullscreen)); // fullscreen

btn_notes.addEventListener('click', () => activateBtn(btn_notes, btn_letters)); // switch letters-notes
btn_letters.addEventListener('click', () => activateBtn(btn_letters, btn_notes));

piano.addEventListener('mouseover', (event) => mouseOver(event.target));
piano.addEventListener('mousedown', (event) => mouseDown(event.target));
document.body.addEventListener('mouseup', (event) => mouseUp(event.target));

window.addEventListener('keydown', (event) => keyDown(event));
window.addEventListener('keyup', (event) => keyUp(event));