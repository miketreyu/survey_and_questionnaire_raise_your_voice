function showSection(sectionId) {
    document.getElementById('links').style.display = 'none';
    var sections = document.getElementsByClassName('survey-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    document.getElementById(sectionId).style.display = 'block';
}

function showQuestionnaire() {
    document.getElementById('domestic-violence-form').style.display = 'none';
    document.getElementById('domestic-violence-questionnaire').style.display = 'block';
}

function showQuestionnaire() {
    document.getElementById('sexual-violence-form').style.display = 'none';
    document.getElementById('sexual-violence-questionnaire').style.display = 'block';
}

function showQuestionnaire() {
    document.getElementById('divorce-form').style.display = 'none';
    document.getElementById('divorce-questionnaire').style.display = 'block';
}

function showQuestionnaire() {
    document.getElementById('child-maintenance-form').style.display = 'none';
    document.getElementById('child-maintenance-questionnaire').style.display = 'block';
}
