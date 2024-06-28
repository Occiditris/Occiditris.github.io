document.getElementById('openBtn').addEventListener('click', function() {
    document.querySelector('.wrapper').classList.add('open');
    var audio = document.getElementById('raudio');
    audio.play();

    setTimeout(function() {
        var letterText = document.getElementById('letterText');
        letterText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    }, 750); // Match the transition-delay of 0.75s for the envelope opening
});

document.getElementById('resetBtn').addEventListener('click', function() {
    document.querySelector('.wrapper').classList.remove('open');
    var audio = document.getElementById('raudio');
    audio.pause();
    audio.currentTime = 0;

    var letterText = document.getElementById('letterText');
    letterText.textContent = "";
});
