// Switch between login and signup forms
const loginContainer = document.getElementById('login-container');
const signupContainer = document.getElementById('signup-container');
const filterContainer = document.getElementById('filter-container');

document.getElementById('signup-link').addEventListener('click', () => {
  loginContainer.classList.add('hidden');
  signupContainer.classList.remove('hidden');
});

document.getElementById('login-link').addEventListener('click', () => {
  signupContainer.classList.add('hidden');
  loginContainer.classList.remove('hidden');
});

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  loginContainer.classList.add('hidden');
  filterContainer.classList.remove('hidden');
});

// Handle signup form submission
document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  signupContainer.classList.add('hidden');
  filterContainer.classList.remove('hidden');
});

// Handle filter form submission
document.getElementById('filter-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const gender = document.getElementById('gender').value;
  const ageGroup = document.getElementById('age-group').value;
  const clothType = document.getElementById('cloth-type').value;
  const imageUpload = document.getElementById('image-upload').files[0];

  if (imageUpload) {
    const reader = new FileReader();
    reader.onload = () => {
      document.getElementById('result-container').innerHTML = `
        <h3>Your Selection:</h3>
        <p>Gender: ${gender}</p>
        <p>Age Group: ${ageGroup}</p>
        <p>Cloth Type: ${clothType}</p>
        <img src="${reader.result}" alt="Uploaded Image" style="max-width: 300px;">
        <p>(Virtual clothing overlay functionality to be implemented)</p>
      `;
    };
    reader.readAsDataURL(imageUpload);
  } else {
    alert('Please upload an image.');
  }
});