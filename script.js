const messages = [
    "Thanks for always be by my side and put up with me 💕",
    "Appreciated everything you did for me, you're the best! 🥰",
    "Let's grow older and wiser together for a long long time.",
    "Happy Valentine's Day babi 🤪",
    "You just made Valentine seems normal when you give me lots of love everyday",
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
        document.getElementById("next-button").addEventListener("click", function() {
            window.location.href = "hint1.html";  // This should link to the transition page
        });
        
    }
    function goToNextPage() {
        window.location.href = "hint1.html"; // Ensure this matches the actual filename
    }
    
}
// script.js
document.getElementById("lets-go").addEventListener("click", function() {
    window.location.href = "final.html"; // Directs to the final page
});
