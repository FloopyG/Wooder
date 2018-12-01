var myVideo = document.querySelectorAll(".video1");

myVideo.forEach(function () {
    myVideo.click(playPause())
});

function playPause() {
    if (myVideo.paused) {
        myVideo.play()
    }
    else {
        myVideo.pause()
    }
}