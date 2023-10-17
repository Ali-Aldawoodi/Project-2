const makeReviewFormHandler = async (event) => {
    event.preventDefault();

    const tutorName = document.querySelector('#tutors');
    const tutorRating = document.querySelector('#rating');
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


document.addEventListener('DOMContentLoaded', function () {
    const tutorsSelect = document.getElementById('tutors');

    fetch('/api/tutors')
        .then(response => response.json())
        .then(data => {
            data.forEach(tutors => {
                const option = document.createElement('option');
                option.value = tutors.id;
                option.text = tutors.tutors_name;
                tutorsSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error:', error));
});