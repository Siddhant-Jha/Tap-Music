window.addEventListener('load', function () {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "lawngreen",
        "aqua",
        "lightblue",
        "lightcyan",
        "lightgreen",
        "lightsalmon"
    ];


    //Making The Pads Work
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubble(index);
        });
    });

    //Bubbles
    const createBubble = function (index) {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function() {
            visual.removeChild(this);
        });
    }

} );