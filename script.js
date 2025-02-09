const messages = [
    "Thanks for always be by my side and put up with me 💕",
    "Appreciated everything you did for me, you're the best! 🥰",
    "Love you loadsss 💖"
];

let revealed = 0;

function showMessage(index) {
    let messageBox = document.getElementById("hint-message");
    messageBox.innerText = messages[index];
    messageBox.style.display = "block"; // Ensure the message is visible

    revealed++;
    
    // Show the Next button after all messages are revealed
    if (revealed === messages.length) {
        document.getElementById("next-button").style.display = "block";
    }
}
