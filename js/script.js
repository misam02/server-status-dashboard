const cpu = 65;
const memory = 48;
const disk = 72;

document.getElementById("cpuBar").style.width = cpu + "%";
document.getElementById("memoryBar").style.width = memory + "%";
document.getElementById("diskBar").style.width = disk + "%";

document.getElementById("cpuValue").innerText = cpu + "%";
document.getElementById("memoryValue").innerText = memory + "%";
document.getElementById("diskValue").innerText = disk + "%";

function updateTime(){

    const now = new Date();

    document.getElementById("time").innerHTML =
        "Last Updated: " + now.toLocaleString();

}

updateTime();

setInterval(updateTime,1000);
