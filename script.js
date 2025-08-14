// Splash screen delay
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("splash").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 1000);
});

// Show message on button click
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("show-message").addEventListener("click", () => {
        document.getElementById("message").style.display = "block";
    });
});
// Falling hearts for splash
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (Math.random() * 20 + 20) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s"; // 3–6 sec fall

    document.getElementById("hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);

// Splash screen delay
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("splash").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 3000);
});

// Show message on button click
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("show-message").addEventListener("click", () => {
        document.getElementById("message").style.display = "block";
    });
});
// Splash screen delay
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("splash").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 3000);
});

// Play audio & show message on button click
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("show-message").addEventListener("click", () => {
        document.getElementById("message").style.display = "block";

        // Play background audio
        const audio = document.getElementById("bg-audio");
        audio.volume = 0.5; // softer volume
        audio.play().catch(err => {
            console.log("Autoplay blocked, waiting for user interaction", err);
        });
    });
});
  document.getElementById("show-message").addEventListener("click", function () {
        document.getElementById("message").style.display = "block";
        document.getElementById("back-button").style.display = "inline-block";
        this.style.display = "none"; // hide the 'My Message' button
    });

    document.getElementById("back-button").addEventListener("click", function () {
        document.getElementById("message").style.display = "none";
        document.getElementById("show-message").style.display = "inline-block";
        this.style.display = "none";
    });
    const showMessageBtn = document.getElementById('show-message');
    const message = document.getElementById('message');
    const backButton = document.getElementById('back-button');

    // Make sure we select the audio element
    const backgroundAudio = document.querySelector('audio');

    showMessageBtn.addEventListener('click', () => {
        message.style.display = 'block';
        backButton.style.display = 'inline-block';
        backgroundAudio.play();
    });

    backButton.addEventListener('click', () => {
        message.style.display = 'none';
        backButton.style.display = 'none';
        backgroundAudio.pause();
    });