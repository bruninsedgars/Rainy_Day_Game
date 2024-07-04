const character = document.getElementById('character');
const drynessLevelDisplay = document.getElementById('dryness-level');
const backgroundMusic = document.getElementById('background-music');
let drynessLevel = 100;

// Play the background music
backgroundMusic.play();

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        jump();
    }
});

function jump() {
    if (!character.classList.contains('jump')) {
        character.classList.add('jump');
        setTimeout(() => {
            character.classList.remove('jump');
        }, 300);
    }
}

setInterval(() => {
    // Decrease dryness level over time
    drynessLevel -= 0.1;
    if (drynessLevel < 0) drynessLevel = 0;
    drynessLevelDisplay.textContent = `Dryness: ${drynessLevel.toFixed(1)}%`;
}, 100);

setInterval(() => {
    // Add logic to show sun and increase dryness level
    if (Math.random() < 0.1) { // 10% chance to show sun
        drynessLevel += 10;
        if (drynessLevel > 100) drynessLevel = 100;
        drynessLevelDisplay.textContent = `Dryness: ${drynessLevel.toFixed(1)}%`;
        // Show sun animation (Placeholder)
        console.log('Sunny weather!');
    }
}, 10000);

// Add obstacle generation and collision detection logic
