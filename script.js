// Play Theme Song Function
function playThemeSong() {
    const audio = document.getElementById('theme-song');
    const button = document.querySelector('.play-button');
    
    VolumeAudio();

    if (audio.paused) {
        audio.play()
            .then(() => {
                button.textContent = '❚❚ Pause';
                button.style.background = 'rgba(200, 0, 0, 0.8)';
            })
            .catch(error => {
                console.log("Autoplay blocked:", error);
                alert("Please click 'Play' again to start audio!");
            });
    } else {
        audio.pause();
        audio.currentTime = 0;
        button.textContent = '▶ Start Journey';
        button.style.background = 'rgba(240, 165, 0, 0.8)';
    }
}

function VolumeAudio() {
    const audio = document.getElementById('theme-song');
    audio.volume = 0.4; 
}
function StayTunedMessage() {
    alert("Stay Tuned !")
}

function AboutInfo() {
    alert("Project Game 2D Pixel yang tidak terealisasikan")
}