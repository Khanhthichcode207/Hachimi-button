document.addEventListener("DOMContentLoaded", () => {
    const teioButton = document.getElementById('teio-btn');
    const counterDisplay = document.getElementById('counter');
    const hachimiAudio = new Audio('/sounds/hachimi.mp3'); 

    let clickCount = 0;

    teioButton.addEventListener('click', () => {
        
        hachimiAudio.currentTime = 0;
        hachimiAudio.play();

        
        clickCount++;
        counterDisplay.textContent = `Hachimi counter: ${clickCount}`;

        
    });
});