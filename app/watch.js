(function () {
    var resetEvent = document.getElementById("reset");
    var startEvent = document.getElementById("start");
    var stopEvent = document.getElementById("stop");
    var interval;
    let sec = 0;
    let min = 0;
    const startTimer = () => {
        let minTag = document.getElementById("min");
        let secTag = document.getElementById("sec");
        interval = setInterval(() => {
            if (sec < 60) {
                sec++;
                if (sec < 10) {
                    secTag.innerText = `0${sec}`
                } else {
                    secTag.innerText = `${sec}`
                }
            } else {
                sec = 0;
                min++;
            }
            if (min < 10) {
                minTag.innerText = `0${min}`
            } else {
                minTag.innerText = `${min}`
            }
        }, 1000);
        startEvent.disabled = true;
        startEvent.style.backgroundColor = 'rgb(193, 190, 188)'
    }
    const resetTimer = () => {
        let min = document.getElementById("min");
        let sec = document.getElementById("sec");

        min.innerText = '00';
        sec.innerText = '00';
        min = 0;
        sec = 0;
    }
    const stopTimer = () => {
        clearInterval(interval);
        startEvent.disabled = false;
        startEvent.style.backgroundColor = 'rgb(141, 245, 141)';
    }
    window.onload = function () {
        resetEvent.addEventListener('click', resetTimer);
        startEvent.addEventListener('click', startTimer);
        stopEvent.addEventListener('click', stopTimer)
    }
}());