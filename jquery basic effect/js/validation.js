
function validateForm(event) {
    event.preventDefault(); 
  
    
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const mobileInput = document.getElementById('mobile');
    const genderInput = document.getElementById('gender');
    const dobInput = document.getElementById('dob');
    const addressInput = document.getElementById('address');
    const cityInput = document.getElementById('city');
    const areaPinInput = document.getElementById('areaPin');
    const stateInput = document.getElementById('state');
    const qualificationInput = document.getElementById('qualification');
    const specializationInput = document.getElementById('specialization');
    const passwordInput = document.getElementById('password');
  
    
    const nameRegex = /^[A-Za-z]{3,20}$/;
    const mobileRegex = /^\d{10}$/;
    const passwordRegex = /^.{8,20}$/;
  
    
    if (!nameRegex.test(firstNameInput.value)) {
      alert('First Name must have 3-20 characters and only alphabets are allowed!');
      firstNameInput.focus();
      return false;
    }
  
    
    if (!nameRegex.test(lastNameInput.value)) {
      alert('Last Name must have 3-20 characters and only alphabets are allowed!');
      lastNameInput.focus();
      return false;
    }
  
    
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert('Invalid Email address!');
      emailInput.focus();
      return false;
    }
  
   
    if (!mobileRegex.test(mobileInput.value)) {
      alert('Mobile must have 10 digits only!');
      mobileInput.focus();
      return false;
    }
  
    
    if (genderInput.value === "") {
      alert('Please select a Gender!');
      genderInput.focus();
      return false;
    }
  
    
    if (!dobInput.value) {
      alert('Please select a Date of Birth!');
      dobInput.focus();
      return false;
    }
  
    
    if (!addressInput.value) {
      alert('Address field cannot be empty!');
      addressInput.focus();
      return false;
    }
  
    
    if (!cityInput.value) {
      alert('City field cannot be empty!');
      cityInput.focus();
      return false;
    }
  
    
    if (!areaPinInput.value) {
      alert('Area PIN field cannot be empty!');
      areaPinInput.focus();
      return false;
    }
  
    
    if (!stateInput.value) {
      alert('State field cannot be empty!');
      stateInput.focus();
      return false;
    }
  
    
    if (!qualificationInput.value) {
      alert('Qualification field cannot be empty!');
      qualificationInput.focus();
      return false;
    }
  
    
    if (!specializationInput.value) {
      alert('Specialization field cannot be empty!');
      specializationInput.focus();
      return false;
    }
  
    
    if (!passwordRegex.test(passwordInput.value)) {
      alert('Password must have 8-20 characters!');
      passwordInput.focus();
      return false;
    }
  
    
    displayUserInput();
  }
  
  
  function displayUserInput() {
    const formElements = document.querySelectorAll('.input-field');
    const userData = {};
  
    formElements.forEach((element) => {
      const fieldName = element.id;
      const fieldValue = element.value;
      userData[fieldName] = fieldValue;
    });
  
    console.log('User Data:', userData);
    alert('Registration successful!\nPlease check the console for user data')
  