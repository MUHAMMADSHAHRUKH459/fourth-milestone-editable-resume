// script.ts

document.addEventListener('DOMContentLoaded', () => {
   const form = document.getElementById('resumeForm') as HTMLFormElement;
   const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
   const editButton = document.getElementById('editButton') as HTMLButtonElement;
   const saveButton = document.getElementById('saveButton') as HTMLButtonElement;
 
   // Function to generate resume
   function generateResume(): void {
     const name = (form.elements.namedItem('name') as HTMLInputElement).value;
     const email = (form.elements.namedItem('email') as HTMLInputElement).value;
     const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
     const education = (form.elements.namedItem('education') as HTMLTextAreaElement).value;
     const experience = (form.elements.namedItem('experience') as HTMLTextAreaElement).value;
     const skills = (form.elements.namedItem('skills') as HTMLTextAreaElement).value;
 
     resumeOutput.innerHTML = `
       <h2>Personal Information</h2>
       <p><strong>Name:</strong> <span class="editable">${name}</span></p>
       <p><strong>Email:</strong> <span class="editable">${email}</span></p>
       <p><strong>Phone:</strong> <span class="editable">${phone}</span></p>
       <h2>Education</h2>
       <p class="editable">${education}</p>
       <h2>Experience</h2>
       <p class="editable">${experience}</p>
       <h2>Skills</h2>
       <p class="editable">${skills}</p>
     `;
   }
 
   // Function to toggle editing mode
   function toggleEditMode(isEditing: boolean): void {
     document.querySelectorAll('#resumeOutput .editable').forEach(el => {
       (el as HTMLElement).contentEditable = isEditing ? 'true' : 'false';
     });
 
     if (isEditing) {
       editButton.classList.add('hidden');
       saveButton.classList.remove('hidden');
     } else {
       editButton.classList.remove('hidden');
       saveButton.classList.add('hidden');
     }
   }
 
   // Handle form submission
   form.addEventListener('submit', (e: Event) => {
     e.preventDefault();
     generateResume();
     toggleEditMode(false); // Switch to view mode after generating the resume
   });
 
   // Handle edit button click
   editButton.addEventListener('click', () => {
     toggleEditMode(true); // Switch to edit mode
   });
 
   // Handle save button click
   saveButton.addEventListener('click', () => {
     toggleEditMode(false); // Switch to view mode
     // You can add logic here to save the edited content if needed
   });
 });
 