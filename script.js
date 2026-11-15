let police = document.getElementById("police1");
let fire = document.getElementById("fire1");
let ambo = document.getElementById("ambo1");

const map = document.getElementById("map");

function createIncident(type){

    const marker = document.createElement("div");

    marker.className = "incidentMarker";

    const x = Math.floor(Math.random()*850) + 50;
    const y = Math.floor(Math.random()*500) + 50;

    marker.style.left = x + "px";
    marker.style.top = y + "px";

    marker.dataset.x = x;
    marker.dataset.y = y;

    marker.innerHTML = "⚠️";

    map.appendChild(marker);

    addLog(type + " reported.");

    return marker;
}

function moveUnit(unit,x,y){

    unit.style.left = x + "px";
    unit.style.top = y + "px";
}

function dispatchPolice(){

    const incident = createIncident("Police Incident");

    moveUnit(
        police,
        incident.dataset.x,
        incident.dataset.y
    );

    setTimeout(() => {

        incident.innerHTML = "✅";
        incident.style.background = "green";

        addLog("Police arrived.");

    },3000);

}

function dispatchFire(){

    const incident = createIncident("Fire");

    moveUnit(
        fire,
        incident.dataset.x,
        incident.dataset.y
    );

    setTimeout(() => {

        incident.innerHTML = "✅";
        incident.style.background = "green";

        addLog("Fire crews arrived.");

    },3000);

}

function dispatchAmbulance(){

    const incident = createIncident("Medical");

    moveUnit(
        ambo,
        incident.dataset.x,
        incident.dataset.y
    );

    setTimeout(() => {

        incident.innerHTML = "✅";
        incident.style.background = "green";

        addLog("Ambulance arrived.");

    },3000);

}

function addLog(text){

    const log = document.getElementById("log");

    const line = document.createElement("div");

    line.textContent =
        "[" + new Date().toLocaleTimeString() + "] " + text;

    log.prepend(line);

}