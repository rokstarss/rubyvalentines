// toggle the hidden messages
document.getElementById("revealMessage").addEventListener("click", function() {
    const hiddenMessage = document.getElementById("hiddenMessage");
    hiddenMessage.classList.toggle("hidden");
    this.textContent= hiddenMessage.classList.contains("hidden")
    ? "Click for a Surpise grr"
    : "Hide the Message";
});

// required for the conformation
document.getElementById("confirmLove").addEventListener("click", function() {
    const userResponse = prompt("Do you love me? (yes/no)");
    const button = this;

    if (userResponse && userResponse.toLowerCase() === "yes") {
        alert("YES😈, LETS DO VALENTINES");
        document.getElementById("activitySelection").classList.remove("hidden");
    } else {
        alert("STOP STOP STOP SAY YES PLEASEEEE PLEASEEEE");
        button.classList.add("grow")
        setTimeout(() => button.classList.remove("grow"), 1000)
    }
});

document.getElementById("showActivity").addEventListener("click", function(){
    const activity = document.getElementById("activity").ariaValueMax;
    const activityMessage = document.getElementById("activityMessage");

    const messages = {
        dinner: "Lets get a nummy dinner somewhere :)",
        movie: "How about a nice little movie :drools everywhere:",
        bowling: "how about some bowling, i might beat u tho :P",
    };

    activityMessage.textContent = messages[activity];
    activityMessage.classList("hidden");
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
