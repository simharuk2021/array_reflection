var emails = [];



function randomImg(width, height) {
  
    document.getElementById('img-container').innerHTML = '<img src="https://source.unsplash.com/random/'+width+'x'+height+'">';
  }


  const button = document.getElementById('image');
  const form = document.querySelector('.form');
  const email = document.getElementById('email');


button.addEventListener('click', () => {
  randomImg(300,300);
});

  form.addEventListener('submit', e => {
    e.preventDefault();
  
    validateInputs();
  });
  





  const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
  
  
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
  }
  
  const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
  
    errorDisplay.innerText = '';
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
  };
  
  const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const validateInputs = () => {
    const emailValue = email.value.trim();

    if (emailValue === '') {
      setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
      setError(email, 'Provide a valid email address');
    } else {
      setSuccess(email)
      console.log(emailValue);
      emails.push(emailValue);
      console.log(emails);
   }
  };



