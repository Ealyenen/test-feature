var player = videojs('video-player-cors');
player.on('play', function () {
    document.querySelector('.vjs-theme-red.video-js').style.backgroundImage = "none";
    document.querySelector('.vjs-theme-red.video-js').style.background = "#000";
});