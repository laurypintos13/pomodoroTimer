const changeImg = document.getElementById('changeImg');
const changeImgAnimation = document.getElementById('changeImgAnimation')
const changeTimer = document.getElementById('changeTimer')
const btnPomodoro = document.getElementById('btnPomodoro');
const btnShortBreak = document.getElementById('btnShortBreak');
const btnLongBreak = document.getElementById('btnLongBreak');
const btnPlay = document.getElementById('btnPlay');
const btnPause = document.getElementById('btnPause');
const btnReset = document.getElementById('btnReset');
const resetAll = document.getElementById('resetAll')

let tiempoInicial = 0 // 25 * 60; 25 minutos en segundos
let intervalo;

function actualizarTemporizador() {
    const minutos = Math.floor(tiempoInicial / 60);
    const segundos = tiempoInicial % 60;
    const formatoTiempo = ` <p class="numberPomodoro">${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}</p>`;
    changeTimer.innerHTML = formatoTiempo;
    tiempoInicial--;

    if (tiempoInicial < 0) {
        clearInterval(intervalo);
        Swal.fire({
            title: "TIME US UP!",
            text:"take a break / back to work",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
        });
        
    }
}
function iniciarTemporizador() {
    // Detener el temporizador anterior (si hay alguno)
    clearInterval(intervalo);

    // Reiniciar el tiempo inicial
    tiempoInicial;

    // Llamar a la función actualizarTemporizador cada segundo (1000 milisegundos)
    intervalo = setInterval(actualizarTemporizador, 1000);
}

function borrarTemporizador() {
    clearInterval(intervalo);
}


btnPlay.disabled = true;
btnPlay.style.display = "none";
btnPause.disabled = true;
btnPause.style.display = "none";
btnReset.disabled = true;
btnReset.style.display = "none";

function activateBtns(){
    btnPlay.disabled = false;
    btnPlay.style.display = "";
    btnPause.disabled = false;
    btnPause.style.display = "";
    btnReset.disabled = false;
    btnReset.style.display = "";
}


resetAll.addEventListener('click',(e)=>{
    e.preventDefault();
    location.reload();
})

btnPomodoro.addEventListener('click', (e)=>{
    e.preventDefault();
    borrarTemporizador();
    changeImg.innerHTML = `<img class="tomatoImgAnimation" src="media/work.png" alt="">`
    changeTimer.innerHTML = `<p class="numberPomodoro">25:00</p>`
    btnPomodoro.style.background = '#FFD6A5';
    btnShortBreak.style.background = '#f27581';
    btnLongBreak.style.background = '#f27581';

    activateBtns()
    btnReset.disabled = true;

    btnPlay.addEventListener('click', (e)=>{
        e.preventDefault
        btnReset.disabled = false;
        tiempoInicial = 25*60
        iniciarTemporizador()
        btnPlay.disabled = true;
    })
    btnReset.addEventListener('click', (e)=>{
        e.preventDefault()
        tiempoInicial = 25*60
        actualizarTemporizador()
        iniciarTemporizador()
    })
    btnPause.addEventListener('click',(e)=>{
        e.preventDefault()
        borrarTemporizador();
        changeTimer.innerHTML = `<p class="numberPomodoro">25:00</p>`
        btnPlay.disabled = false;
        btnReset.disabled = true;
    })
})

btnShortBreak.addEventListener('click', (e)=>{
    e.preventDefault()
    borrarTemporizador()
    
    changeImg.innerHTML = `<img class="tomatoImgAnimation" src="media/shortBreak.png" alt="">`
    changeTimer.innerHTML = `<p class="numberPomodoro">05:00</p>`
    btnShortBreak.style.background = '#FFD6A5';
    btnPomodoro.style.background = '#f27581';
    btnLongBreak.style.background = '#f27581';

    activateBtns()
    btnReset.disabled = true;

    btnPlay.addEventListener('click', (e)=>{

        e.preventDefault
        btnReset.disabled = false;
        tiempoInicial = 5*60
        iniciarTemporizador()
        btnPlay.disabled = true;
    })
    btnReset.addEventListener('click', (e)=>{
        e.preventDefault()
        tiempoInicial = 5*60
        actualizarTemporizador()
        iniciarTemporizador()
    })
    btnPause.addEventListener('click',(e)=>{
        e.preventDefault()
        borrarTemporizador();
        changeTimer.innerHTML = `<p class="numberPomodoro">05:00</p>`
        btnPlay.disabled = false;
        btnReset.disabled = true;
    })
})
btnLongBreak.addEventListener('click', (e)=>{
    e.preventDefault(e)
    borrarTemporizador();
    changeImg.innerHTML = `<img class="tomatoImgAnimation" src="media/longBreak.png" alt="">`
    changeTimer.innerHTML = `<p class="numberPomodoro">15:00</p>`
    btnLongBreak.style.background = '#FFD6A5';
    btnPomodoro.style.background = '#f27581';
    btnShortBreak.style.background = '#f27581';

    activateBtns()
    btnReset.disabled = true;

    btnPlay.addEventListener('click', (e)=>{
        e.preventDefault
        btnReset.disabled = false;
        tiempoInicial = 15*60
        iniciarTemporizador()
        btnPlay.disabled = true;
    })
    btnReset.addEventListener('click', (e)=>{
        e.preventDefault()
        tiempoInicial = 15*60
        actualizarTemporizador()
        iniciarTemporizador()
    })
    btnPause.addEventListener('click',(e)=>{
        e.preventDefault()
        borrarTemporizador();
        changeTimer.innerHTML = `<p class="numberPomodoro">15:00</p>`
        btnPlay.disabled = false;
        btnReset.disabled = true;
    })
})

