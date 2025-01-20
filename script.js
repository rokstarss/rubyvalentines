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

