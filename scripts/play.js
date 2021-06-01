let oursong = document.querySelector("#our-song");
let sheykijane = document.querySelector("#sheykijane");
let tuyo = document.querySelector("#tuyo");
let buton = document.querySelectorAll(".stopBtn");
let status;

let oursongAn = new Audio("../music/our song.mp3");
let sheykijaneAn = new Audio("../music/sheykijane.mp3");
let tuyoAn = new Audio("../music/tuyo.mp3")


function play() {
    oursong.addEventListener('click', function(){
        oursongAn.play();
    })
    sheykijane.addEventListener('click', ()=>{
        sheykijaneAn.play()
    })
    tuyo.addEventListener('click', ()=>{
        tuyoAn.play()
    })
}


play()


function stopMusic() {
   
}





