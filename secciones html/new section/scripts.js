document.addEventListener('DOMContentLoaded', () => {
    // Initially hide all survey sections
    const surveySections = document.querySelectorAll('.survey-section');
    surveySections.forEach(section => {
        section.style.display = 'none';
    });

    // Function to show a particular survey section and hide others
    window.showSection = function(sectionId) {
        // Hide all survey sections
        document.getElementById('links').style.display = 'none';
        surveySections.forEach(section => {
            section.style.display = 'none';
        });

        // Show the selected section
        const selectedSection = document.getElementById(sectionId);
        selectedSection.style.display = 'block';
    };

    // Function to show the questionnaire section after submitting the survey
    window.showQuestionnaire = function(event, questionnaireId) {
        event.preventDefault(); // Prevent form submission
        const form = event.target; // Get the form that was submitted
        const formData = new FormData(form); // Get form data

        // Example: Validate form data before proceeding
        const name = formData.get('name');
        if (!name) {
            alert('Please enter your name');
            return;
        }

        // Hide the current survey form
        const surveyForm = form.closest('.survey-section');
        surveyForm.style.display = 'none';

        // Show the corresponding questionnaire
        const questionnaire = document.getElementById(questionnaireId);
        questionnaire.style.display = 'block';
    };
});

