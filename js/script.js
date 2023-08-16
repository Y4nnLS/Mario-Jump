document.addEventListener('DOMContentLoaded', function () {
    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe');

    const pulo = () => {
        mario.classList.add('pulo');
        setTimeout(() => {
            mario.classList.remove('pulo');
        }, 500);
    }

    let loop = setInterval(() => {
        console.log('loop')
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './assets/game-over.png';
            mario.style.widht = '75px'
            mario.style.marginLeft = '50px'

            clearInterval(loop);
        }
    }, 10);

    document.addEventListener('keydown', pulo);
});
