let day = 1;
let safety = 100;
let threat = 1;
let money = 1000;
let deaths = 0;

let police = 6;
let fire = 3;
let ambulance = 4;

let currentIncident = null;

const incidents = [
{
name:"Street Assault",
police:1,
fire:0,
ambulance:1,
reward:100,
risk:2
},
{
name:"Gang Fight",
police:2,
fire:0,
ambulance:1,
reward:250,
risk:5
},
{
name:"Drive-By Shooting",
police:4,
fire:0,
ambulance:2,
reward:500,
risk:8
},
{
name:"Drug House Raid",
police:3,
fire:0,
ambulance:0,
reward:700,
risk:6
},
{
name:"Minor Crash",
police:1,
fire:0,
ambulance:1,
reward:150,
risk:2
},
{
name:"Multi Vehicle Crash",
police:2,
fire:1,
ambulance:2,
reward:400,
risk:6
},
{
name:"Gang Arson",
police:3,
fire:2,
ambulance:1,
reward:800,
risk:9
}
];

function updateUI() {
    dayEl.textContent = day;
    safetyEl.textContent = safety;
    threatEl.textContent = threat;
    moneyEl.textContent = money;
    deathsEl.textContent = deaths;

    policeEl.textContent = police;
    fireEl.textContent = fire;
    ambulanceEl.textContent = ambulance;
}

function log(message) {
    document.getElementById("log").innerHTML =
        `<div>${message}</div>` +
        document.getElementById("log").innerHTML;
}

function generateIncident() {

    currentIncident =
        incidents[Math.floor(Math.random()*incidents.length)];

    document.getElementById("incident").innerHTML = `
        <h2>${currentIncident.name}</h2>
        <p>Police: ${currentIncident.police}</p>
        <p>Fire: ${currentIncident.fire}</p>
        <p>Ambulance: ${currentIncident.ambulance}</p>
        <p>Reward: $${currentIncident.reward}</p>
    `;
}

function dispatchIncident() {

    if (
        police < currentIncident.police ||
        fire < currentIncident.fire ||
        ambulance < currentIncident.ambulance
    ) {
        log("❌ Not enough units.");
        return;
    }

    money += currentIncident.reward;

    if(currentIncident.name.includes("Gang")) {
        threat = Math.max(1, threat - 1);
    }

    safety = Math.min(100, safety + 1);

    log("✅ Resolved " + currentIncident.name);

    advanceDay();
}

function ignoreIncident() {

    safety -= currentIncident.risk;
    deaths += 1;

    if(currentIncident.name.includes("Gang")) {
        threat++;
    }

    log("🚨 Ignored " + currentIncident.name);

    advanceDay();
}

function advanceDay() {

    day++;

    if(Math.random() < 0.3){
        threat++;
    }

    updateUI();

    if(safety <= 25 || threat >= 10 || deaths >= 30){
        alert("Game Over");
        location.reload();
    }

    if(day > 30){
        alert("Victory!");
        location.reload();
    }

    generateIncident();
}

const dayEl = document.getElementById("day");
const safetyEl = document.getElementById("safety");
const threatEl = document.getElementById("threat");
const moneyEl = document.getElementById("money");
const deathsEl = document.getElementById("deaths");

const policeEl = document.getElementById("police1");
const fireEl = document.getElementById("fire1");
const ambulanceEl = document.getElementById("ambo1");

police1.style.left = "500px";
police1.style.top = "300px";

fire1.style.left = "500px";
fire1.style.top = "300px";

ambo1.style.left = "500px";
ambo1.style.top = "300px";


updateUI();
generateIncident();
 
