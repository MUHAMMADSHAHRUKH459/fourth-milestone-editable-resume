// script.ts
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var resumeOutput = document.getElementById('resumeOutput');
    var editButton = document.getElementById('editButton');
    var saveButton = document.getElementById('saveButton');
    // Function to generate resume
    function generateResume() {
        var name = form.elements.namedItem('name').value;
        var email = form.elements.namedItem('email').value;
        var phone = form.elements.namedItem('phone').value;
        var education = form.elements.namedItem('education').value;
        var experience = form.elements.namedItem('experience').value;
        var skills = form.elements.namedItem('skills').value;
        resumeOutput.innerHTML = "\n       <h2>Personal Information</h2>\n       <p><strong>Name:</strong> <span class=\"editable\">".concat(name, "</span></p>\n       <p><strong>Email:</strong> <span class=\"editable\">").concat(email, "</span></p>\n       <p><strong>Phone:</strong> <span class=\"editable\">").concat(phone, "</span></p>\n       <h2>Education</h2>\n       <p class=\"editable\">").concat(education, "</p>\n       <h2>Experience</h2>\n       <p class=\"editable\">").concat(experience, "</p>\n       <h2>Skills</h2>\n       <p class=\"editable\">").concat(skills, "</p>\n     ");
    }
    // Function to toggle editing mode
    function toggleEditMode(isEditing) {
        document.querySelectorAll('#resumeOutput .editable').forEach(function (el) {
            el.contentEditable = isEditing ? 'true' : 'false';
        });
        if (isEditing) {
            editButton.classList.add('hidden');
            saveButton.classList.remove('hidden');
        }
        else {
            editButton.classList.remove('hidden');
            saveButton.classList.add('hidden');
        }
    }
    // Handle form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        generateResume();
        toggleEditMode(false); // Switch to view mode after generating the resume
    });
    // Handle edit button click
    editButton.addEventListener('click', function () {
        toggleEditMode(true); // Switch to edit mode
    });
    // Handle save button click
    saveButton.addEventListener('click', function () {
        toggleEditMode(false); // Switch to view mode
        // You can add logic here to save the edited content if needed
    });
});
