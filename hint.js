function showMessage(message) {
    let messageBox = document.getElementById('message-box');
    if (messageBox) {
        messageBox.innerText = message;
        messageBox.style.display = 'block'; // Ensure it's visible
    } else {
        console.error("Message box not found!");
    }
}