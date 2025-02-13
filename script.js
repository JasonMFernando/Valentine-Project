function showMessage() {
    document.getElementById("valentine-text").innerHTML = "Thanks for being my valentine ⸜(｡˃ ᵕ ˂ )⸝♡";
    document.getElementById("love-gif").src = "Images/confirm.gif";
}
function moveNoButton() {
    const noButton = document.getElementById("no");
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}
