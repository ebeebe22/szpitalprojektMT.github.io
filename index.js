document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('visitCount')) {
        let count = parseInt(localStorage.getItem('visitCount'));
        document.getElementById('counter').textContent = count;
    } else {
        localStorage.setItem('visitCount', 1);
        document.getElementById('counter').textContent = 1;
    }

    if (!sessionStorage.getItem('startTime')) {
        var startTime = new Date();
        sessionStorage.setItem('startTime', startTime);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    ctx.translate(30, 20);
    ctx.font = '20px Times New Roman';
    ctx.fillStyle = 'black';
    ctx.fillText('Wielospecjalistyczny Szpital im. Antoniego', -30, 160);

    ctx.fillStyle = 'grey';
    ctx.fillRect(25, 25, 150, 100);

    ctx.fillStyle = 'white';
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 2; j++) {
            ctx.fillRect(35 + i * 45, 35 + j * 30, 15, 15);
        }
    }

    ctx.fillStyle = 'black';
    ctx.fillRect(125, 95, 25, 30);

    ctx.beginPath();
    ctx.moveTo(115, 40);
    ctx.lineTo(135, 40);
    ctx.lineTo(135, 60);
    ctx.lineTo(155, 60);
    ctx.lineTo(155, 80);
    ctx.lineTo(135, 80);
    ctx.lineTo(135, 100);
    ctx.lineTo(115, 100);
    ctx.lineTo(115, 80);
    ctx.lineTo(95, 80);
    ctx.lineTo(95, 60);
    ctx.lineTo(115, 60);
    ctx.closePath();
    ctx.fillStyle = 'red';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(125, 70, 31, 0, 2 * Math.PI);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 1;
    ctx.stroke();

    canvas.addEventListener('click', function () {
        window.location.href = 'index.html';
    });
});

function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + '-px';
}

setInterval(updateClock, 1000);

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = padZero(hours);
    minutes = padZero(minutes);
    seconds = padZero(seconds);

    document.getElementById('clock').textContent = hours + ":" + minutes + ":" + seconds;
}

function padZero(num) {
    return (num < 10 ? "0" : "") + num;
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('converter-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const value1 = parseFloat(document.getElementById('value1').value);
        const value2 = parseFloat(document.getElementById('value2').value);
        const value3 = parseFloat(document.getElementById('value3').value);
        const value4 = parseFloat(document.getElementById('value4').value);

        const result = value1 + value2 * value3 / value4;

        resultDiv.textContent = `Wynik: ${result}`;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var clockElement = document.getElementById('clock');
    var dateElement = document.getElementById('date');
    var timeSpentElement = document.getElementById('time-spent');

    function updateTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var day = currentTime.getDate();
        var month = currentTime.getMonth() + 1;
        var year = currentTime.getFullYear();

        hours = (hours < 10) ? '0' + hours : hours;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        clockElement.textContent = hours + ':' + minutes + ':' + seconds;
        dateElement.textContent = day + '.' + month + '.' + year;

        var startTime = new Date(sessionStorage.getItem('startTime'));
        var timeSpent = Math.floor((currentTime - startTime) / 1000);
        var hoursSpent = Math.floor(timeSpent / 3600);
        var minutesSpent = Math.floor((timeSpent % 3600) / 60);
        var secondsSpent = timeSpent % 60;

        hoursSpent = (hoursSpent < 10) ? '0' + hoursSpent : hoursSpent;
        minutesSpent = (minutesSpent < 10) ? '0' + minutesSpent : minutesSpent;
        secondsSpent = (secondsSpent < 10) ? '0' + secondsSpent : secondsSpent;

        timeSpentElement.textContent = hoursSpent + ':' + minutesSpent + ':' + secondsSpent;
    }

    updateTime();
    setInterval(updateTime, 1000);
});

document.addEventListener('DOMContentLoaded', function () {
    var formContainer = document.getElementById('form-container');
    formContainer.style.marginTop = '-180px';
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();

        var dataWizyty = document.getElementById("data_wizyty").value;
        var opis = document.getElementById("opis").value.trim();
        var ubezpieczony = document.getElementById("ubezpieczony").checked;
        var plecM = document.getElementById("plecM").checked;
        var plecK = document.getElementById("plecK").checked;
        var wynikiBadan = document.getElementById("wyniki_badan").value;
        var brakWynikowBadan = document.getElementById("brak_wynikow_badan").checked;

        if (!dataWizyty) {
            alert("Prosze wybrac date wizyty.");
        } else if (!plecM && !plecK) {
            alert("Prosze wybrac plec.");
        } else if (opis === "") {
            alert("Prosze napisac opis problemu.");
        } else if (!ubezpieczony) {
            alert("Prosze zaznaczyc, ze jest sie ubezpieczonym.");
        } else if (!wynikiBadan && !brakWynikowBadan) {
            alert("Prosze przeslac wyniki badan lub zaznaczyc opcje 'Bez wynikow badan'.");
        } else {
            alert("Wiadomosc zostala wyslana.");
            this.reset();
        }
    });
});

function toggleMenu(id) {
    var table = document.getElementById(id);
    var icon = document.getElementById('toggle-icon-' + id);

    if (table.classList.contains('hidden')) {
        table.classList.remove('hidden');
        icon.textContent = '-';
    } else {
        table.classList.add('hidden');
        icon.textContent = '+';
    }
}

