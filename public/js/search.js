document.querySelector('#searchbar').addEventListener('input', function () {
    const searchText = this.value.toLowerCase();
    const tutorCards = document.querySelectorAll('.tutor-card');
  
    console.log('searchText:', searchText);
  
    tutorCards.forEach((card) => {
      const tutorName = card.querySelector('.tutor-name').textContent.toLowerCase();
      console.log('tutorName:', tutorName); // Log the tutor name for debugging
      
      if (tutorName.includes(searchText)) {
        card.style.display = 'block'; // Show matching tutors
      } else {
        card.style.display = 'none'; // Hide non-matching tutors
      }
    });
  });
  