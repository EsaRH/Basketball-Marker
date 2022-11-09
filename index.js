let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let countHome = 0
let countGuest = 0

function increment(puntaje, equipo) {

    if (equipo == "home") {
        countHome += puntaje;
        homeScore.innerText = countHome;
    } else if (equipo == "guest") {
        countGuest += puntaje;
        guestScore.innerText = countGuest;
    }
}

function clearCount() {
    countGuest = 0
    countHome = 0
    homeScore.innerText = 0;
    guestScore.innerText = 0;
}