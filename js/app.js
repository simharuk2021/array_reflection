var emails = [];
var images = { 'images': '' };
var array = { "email:''": [] };
var obj = { '': [''] };
const memoryArray = [];
let emailVar;
let url;

const src = 'https://picsum.photos/200/300';


function getImage() {
  fetch(src).then(response => {
    if (response.status >= 400) {
      return response.json().then(errData => {
        const error = new Error('something went wrong');
        error.data = errData;
        throw error;
      });
    }
    $('#image').attr('src', response.url);
    url = response.url;
  }).catch((error) =>
    console.log("Error: " + error));
}




function getEmail() {
  var searchResult;
    for (var i = 0, j = memoryArray.length; i < j; i++) {
      if (memoryArray[i][0] === emailVar) {
        
        searchResult = storage[i];
        return searchResult;
      }
    }
}

$(window).on('load', getImage);
$('#get-image').on('click', getImage);








// async function generateImage() {
//   const image = await getImage();
//   const html = `
//     <img src='${image}' id="card-image">
//   `;
//   card.innerHTML = html;
// }


form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});


const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  const successDisplay = inputControl.querySelector('.success');

  successDisplay.innerText = '';
  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = (element, smessage) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  const successDisplay = inputControl.querySelector('.success');

  errorDisplay.innerText = '';
  errorDisplay.innerText = '';
  successDisplay.innerText = smessage;
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
      setError(email, 'Image already exists');
    } else {
      setSuccess(email, 'Image pushed to email');
      emailVar = document.forms["form"]["email"].value;
      memoryArray.push([email, url]);
    }
  }
};

// check if the email is within the array a



// push image to array
const pushImage = () => {

  const image = document.getElementById('card-image');
  const newImage = image.src;
  const newEmail = email.value;
  array[newEmail] = [newImage];
  console.log(array);
}


// push an image and an email to an array

// function pushToArray() {
//   for (var i = 0; i < emails.length; i++) {
//     for (var j = 0; j < images.length; j++) {
//       array.push([emails[i], images[j]]);
//     }
//   }
// }


// function newImage(){

// }

// function to generate an image
// function to display the image in the html
// function to validate the email address
// function to check if the email address already exists in the array
// function to check if the image is already linked to the email address in the array
// function to set the email address to the image and push it to the array




