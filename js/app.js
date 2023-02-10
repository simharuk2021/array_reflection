// const numItemstoGenerate = 1;

// function showItem(){
//     fetch(`https://source.unsplash.com/1600x900/?random`).then((response) => {
//         let item = 
//         document.createElement('div');
//         item.classList.add('item');
//         item.innerHTML = `<img src="${response.url}" alt="${response.url}" />`
//         document.body.appendChild(item);
//     })
// }

// showItem();



function randomImg(width, height) {
  
    document.getElementById('img-container').innerHTML = '<img src="https://source.unsplash.com/random/'+width+'x'+height+'">';
  }
  
  