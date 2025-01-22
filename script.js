// script.js

// Toggle the hidden messages
document.getElementById("revealMessage").addEventListener("click", function() {
    const hiddenMessage = document.getElementById("hiddenMessage");
    hiddenMessage.classList.toggle("hidden");
    this.textContent = hiddenMessage.classList.contains("hidden")
        ? "Click for a Surpise grr"
        : "Hide the Message";
});

// Required for the confirmation
document.getElementById("confirmLove").addEventListener("click", function() {
    const userResponse = prompt("Do you love me? (yes/no)");
    const button = this;

    if (userResponse && userResponse.toLowerCase() === "yes") {
        alert("YES😈, LETS DO VALENTINES");
        document.getElementById("activitySection").classList.remove("hidden");
        document.getElementById("musicCoverFlow").classList.remove("hidden");
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

// Handle song selection and play the song
document.getElementById('songSelector').addEventListener('change', function() {
    const selectedSong = document.getElementById('songSelector').value;
    const coverImage = document.getElementById('coverImage');
    const selectedSongAudio = document.getElementById('selectedSong');

    // Update the cover image
    coverImage.src = `https://raw.githubusercontent.com/rokstarss/rubyvalentines/main/images/${selectedSong.replace('.mp3', '.jpg')}`;

    // Pause background music if playing
    if (!music.paused) {
        music.pause();
        musicButton.textContent = "Play Music";
    }

    // Update the audio source and play the song
    selectedSongAudio.src = `https://raw.githubusercontent.com/rokstarss/rubyvalentines/main/songs/${selectedSong}`;
    selectedSongAudio.play().catch(error => {
        console.error("Error playing the selected song:", error);
    });
});
