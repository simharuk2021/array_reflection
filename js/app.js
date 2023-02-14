var emails = [];
var images = [];
var arrayCombined = [];
var obj = {};


// loop through email and image array and push to arrayComibined

// function combine() {
//   for (var i = 0; i < emails.length; i++) {
//     for (var j = 0; j < images.length; j++) {
//       arrayCombined[emails[i],images[j]];
//     }
//   }
// }
// console.log(arrayCombined);


async function getImage (url = 'https://picsum.photos/200/300'){
try{
  const response = await fetch(url);

  if(!response.ok){
    throw new Error(`Could not fetch ${url}, received ${response.status}`);
  }
  const data = await response.url;
  return data;
}
  catch(error) {
    console.error(`could not fulfill request: ${error}`);
  }

}


const button = document.getElementById('image');
const form = document.querySelector('.form');
const email = document.getElementById('email');
const card = document.querySelector('.card'); 


button.addEventListener('click', async function() {
  console.log( await getImage());
  generateImage();
});



 async function generateImage() {
  const html =  `
    <img src='${getImage(data)}' alt>
  `;
  card.innerHTML = html;
console.log(generateImage())
}


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
    // if email already exists in array, message is displayed
    if (emails.includes(emailValue)) {
      setError(email, 'Email already exists');
    } else {
      emails.push(emailValue);
      setSuccess(email)
      console.log(emails);
    }
  }
};


