let stop;

function a() {
    let countdown = () => {

        let counter = parseInt(document.getElementById('count').textContent)

        if (counter <= 0) {

            document.getElementsByClassName('message')[0].style.display = 'none';
            clearInterval(stop)

        } else {
            document.getElementById('count').textContent = (new Intl.NumberFormat('de-DE', { minimumIntegerDigits: 2 }).format(counter - 1));
        }
    }
    stop = setInterval(countdown, 1000);
}

window.onload = a();
