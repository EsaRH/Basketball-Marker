let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let countHome = 0
let countGuest = 0

function incrementHome1() {
    countHome += 1;
    homeScore.innerText = countHome;
}
function incrementHome2() {
    countHome += 2;
    homeScore.innerText = countHome;
}
function incrementHome3() {
    countHome += 3;
    homeScore.innerText = countHome;
}

function incrementGuest1() {
    countGuest += 1;
    guestScore.innerText = countGuest;
}
function incrementGuest2() {
    countGuest += 2;
    guestScore.innerText = countGuest;
}
function incrementGuest3() {
    countGuest += 3;
    guestScore.innerText = countGuest;
}

function clearCount() {
    countGuest = 0
    countHome = 0
    homeScore.innerText = 0;
    guestScore.innerText = 0;
}