const keys = document.querySelectorAll('.key');
const keyA = document.querySelector('#key-a');
const keyS = document.querySelector('#key-s');
const keyD = document.querySelector('#key-d');
const keyF = document.querySelector('#key-f');
const keyG = document.querySelector('#key-g');
const keyH = document.querySelector('#key-h');
const keyJ = document.querySelector('#key-j');
const keyK = document.querySelector('#key-k');
const keyL = document.querySelector('#key-l');
const bgColor = "yellow";

document.addEventListener('keypress', (e) => {
    if (e.code === "KeyA") {
        keyA.style.backgroundColor = bgColor;
        document.getElementById('clap').play();
        keyA.classList.toggle('.playing')
    }
    else if (e.code === "KeyS") {
        keyS.style.backgroundColor = bgColor;
        document.getElementById('hithat').play();
    }
    else if (e.code === "KeyD") {
        keyD.style.backgroundColor = bgColor;
        document.getElementById('kick').play();
    }
    else if (e.code === "KeyF") {
        keyF.style.backgroundColor = bgColor;
        document.getElementById('openhat').play();
    }
    else if (e.code === "KeyG") {
        keyG.style.backgroundColor = bgColor;
        document.getElementById('boom').play();
    }
    else if (e.code === "KeyH") {
        keyH.style.backgroundColor = bgColor;
        document.getElementById('ride').play();
    }
    else if (e.code === "KeyJ") {
        keyJ.style.backgroundColor = bgColor;
        document.getElementById('snare').play();
    }
    else if (e.code === "KeyK") {
        keyK.style.backgroundColor = bgColor;
        document.getElementById('tom').play();
    }
    else if (e.code === "KeyL") {
        keyL.style.backgroundColor = bgColor;
        document.getElementById('tink').play();
    }
});

keys.forEach((key) => {
    document.addEventListener('keyup', () => {
        key.style.backgroundColor = 'grey';
    })
})