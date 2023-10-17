const makeReviewFormHandler = async (event) => {
    event.preventDefault();

    const tutorName = document.querySelector('#tutors').value.trim();
    const tutorRating = document.querySelector('#rating').value.trim();
    const ReviewContent = document.querySelector('#review').value.trim();

    if (tutorName && tutorRating && ReviewContent) {
        const response = await fetch('/reviews', {
            method: 'POST',
            body: JSON.stringify({ tutorName, tutorRating, ReviewContent }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/reviews');
        } else {
            alert(response.statusText);
        }
    }
};
