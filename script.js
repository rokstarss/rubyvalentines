// toggle the hidden messages
document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById("revealMessage").addEventListener("click", function() { 
        const hiddenMessage = document.getElementById("hiddenMessage"); 
        hiddenMessage.classList.toggle("hidden");
        this.textContent = hiddenMessage.classList.contains("hidden")
            ? "Click for a Surprise grr"
            : "Hide the Message"; 
    });
});

// required for the conformation
document.getElementById("confirmLove").addEventListener("click", function() {
    const userResponse = prompt("Do you love me? (yes/no)");
    const button = this;

    if (userResponse && userResponse.toLowerCase() === "yes") {
        alert("YES😈, LETS DO VALENTINES");
        document.getElementById("activitySection").classList.remove("hidden");
    } else {
        alert("STOP STOP STOP SAY YES PLEASEEEE PLEASEEEE");
        button.classList.add("grow")
        setTimeout(() => button.classList.remove("grow"), 1000)
    }
});

document.getElementById("showActivity").addEventListener("click", function() { 
  const activity = document.getElementById("activity").value; 
  const activityMessage = document.getElementById("activityMessage"); 
  
  const messages = { 
    dinner: "Let's get a nummy dinner somewhere :)",
    movie: "How about a nice little movie :drools everywhere:", 
    bowling: "How about some bowling, I might beat you though :P",
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

// fully fixed tested with codepen
