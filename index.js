document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');
  const studentNameDisplay = document.getElementById('studentNameDisplay');
  const courseNameDisplay = document.getElementById('courseNameDisplay');
  const personalMessageDisplay = document.getElementById('personalMessageDisplay');

  // Hide the modal initially
  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName').value;
      const personalMessageInput = document.getElementById('personalMessage').value;
      const courseNameInput = document.getElementById('courseName').value;

      if (studentNameInput.trim() === '' || personalMessageInput.trim() === '' || courseNameInput.trim() === '') {
          alert('Please fill in all fields');
          return;
      }
      studentNameDisplay.textContent = studentNameInput;
      courseNameDisplay.textContent = courseNameInput;
      personalMessageDisplay.textContent = personalMessageInput;

      // Display the modal
      modal.style.display = 'block';
  });

  // Close the modal when the close button is clicked
  closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });
});
