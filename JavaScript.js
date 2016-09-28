function videoControls() {
    var btnPlay = document.getElementById("play");
    btnPlay.addEventListener('click', play);

    var btnRewind = document.getElementById("rewind");
    btnRewind.addEventListener('click, rewind');

    var btnFastFoward = document.getElementById("fastfwd");
    btnFastFoward.addEventListener('click', fastforward);

    var btnRestart = document.getElementById("restart");
    btnRestart.addEventListener('click', restart);
}

videoControls();



function play() {
    var video = document.getElementById("video");
    var playBtn = document.getElementById("play");

    if (video.paused) {
        video.play();
        button.textContent = "&#9616;&#9616";
    }
    else {
        video.paused();
        button.textContent = "&##10074;";
    }
}

function rewind() {
    var video = document.getElementById("video");
    video.currenttime -= 10;
}

function fastforward() {
    var video = document.getElementById("video");
    video.currentTime += 10;
}

function restart() {
    var video = document.getElementById("video");
    video.currentTime = 0;
}