generateImage();


var emails = [];
var images = {'images':''};
var array = [];
var obj = {'': []};


// loop through email and image array and push to arrayCombined

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
  const data = response.url;
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
  // console.log( await getImage());
  generateImage();
});



 async function generateImage() {
  const image= await getImage();
  const html =  `
    <img src='${image}' id="card-image">
  `;
  card.innerHTML = html;
}


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
      setError(email, 'Email already exists');
    } else {
      setSuccess(email, 'Email added successfully');
      // emails.push(emailValue);
      array.push(emailValue);
      pushImage();
    }
  }
};

// check if the email is within the array and push image to the email value, else push email and image to the array
// can I loop through the array and access the objects inside the array?

// push image to array
const pushImage = () => {
  const image = document.getElementById('card-image');
  const newImage= image.src;
  array.push({newImage});
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




