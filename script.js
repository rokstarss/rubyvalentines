// 3D Cover Flow Logic
const covers = document.querySelectorAll('.cover');
const coverFlow = document.getElementById('coverFlow');
const coverFlowContainer = document.getElementById('coverFlowContainer');
const selectedSongAudio = document.getElementById('selectedSong');
const proceedButton = document.getElementById('proceedButton');
const smallButtonContainer = document.getElementById('smallButtonContainer');
const mainContent = document.getElementById('mainContent');
let angle = 0;

covers.forEach((cover, index) => {
    cover.style.transform = `rotateY(${index * (360 / covers.length)}deg) translateZ(300px)`;

    cover.addEventListener('click', function() {
        const songSrc = this.getAttribute('data-src');

        // Update the audio source and play the song
        selectedSongAudio.src = `https://raw.githubusercontent.com/rokstarss/rubyvalentines/main/songs/${songSrc}`;
        selectedSongAudio.play().catch(error => {
            console.error("Error playing the selected song:", error);
        });

        // Show the proceed button
        proceedButton.classList.remove('hidden');

        // Hide the cover flow and show the small button
        coverFlow.classList.add('hidden');
        selectedSongAudio.classList.add('hidden');
        proceedButton.classList.add('hidden');
        smallButtonContainer.classList.remove('hidden');

        // Move the Valentine's content to the middle
        mainContent.classList.remove('hidden');
        mainContent.classList.add('centered');
    });
});

// Rotate cover flow with keyboard arrows
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        angle -= 360 / covers.length;
    } else if (event.key === 'ArrowLeft') {
        angle += 360 / covers.length;
    }
    coverFlow.style.transform = `rotateY(${angle}deg)`;
});

// Additional functionality for the small button
document.getElementById('smallButton').addEventListener('click', () => {
    // Toggle visibility between cover flow and main content
    const isCoverFlowHidden = coverFlow.classList.contains('hidden');

    if (isCoverFlowHidden) {
        coverFlow.classList.remove('hidden');
        selectedSongAudio.classList.remove('hidden');
        smallButtonContainer.classList.add('hidden');
        mainContent.classList.add('hidden');
        mainContent.classList.remove('centered');
    } else {
        coverFlow.classList.add('hidden');
        selectedSongAudio.classList.add('hidden');
        smallButtonContainer.classList.remove('hidden');
        mainContent.classList.remove('hidden');
        mainContent.classList.add('centered');
    }
});

// Existing Code

// Toggle the hidden messages
document.getElementById("revealMessage").addEventListener("click", function() {
    const hiddenMessage = document.getElementById("hiddenMessage");
    hiddenMessage.classList.toggle("hidden");
    this.textContent = hiddenMessage.classList.contains("hidden")
        ? "Click for a Surprise grr"
        : "Hide the Message";
});

// Required for the confirmation
document.getElementById("confirmLove").addEventListener("click", function() {
    const userResponse = prompt("Do you love me? (yes/no)");
    const button = this;

    if (userResponse && userResponse.toLowerCase() === "yes") {
        alert("YES😈, LETS DO VALENTINES");
        document.getElementById("activitySection").classList.remove('hidden');
    } else {
        alert("STOP STOP STOP SAY YES PLEASEEEE PLEASEEEE");
        button.classList.add("grow");
        setTimeout(() => button.classList.remove("grow"), 1000);
    }
});

document.getElementById("showActivity").addEventListener("click", function() {
    const activity = document.getElementById("activity").value;
    const activityMessage = document.getElementById("activityMessage");

    const messages = {
        dinner: "Lets get a nummy dinner somewhere :)",
        movie: "How about a nice little movie :drools everywhere:",
        bowling: "how about some bowling, i might beat u tho :P",
    };

    activityMessage.textContent = messages[activity];
    activityMessage.classList.remove("hidden");
});

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("toggleMusic");

musicButton.addEventListener("click", function() {
    if (music.paused) {
        music.play();
        musicButton.textContent = "Pause Music";
    } else {
        music.pause();
        musicButton.textContent = "Play Music";
    }
});
