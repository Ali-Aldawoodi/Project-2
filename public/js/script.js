function updateRatingText() {
    const ratingInput = document.getElementById('rating');
    const ratingText = document.getElementById('rating-text');

    const currentRating = ratingInput.value;

    ratingText.textContent = `Rating: ${currentRating} out of 5`;
}

// Attach the event listener to the rating input
const ratingInput = document.getElementById('rating');
ratingInput.addEventListener('input', updateRatingText);

// Initialize the rating text with the default value
updateRatingText();