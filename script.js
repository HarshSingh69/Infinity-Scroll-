const imgContainer = document.getElementById('img-container');
const loader = document.getElementById('loader');

let imgArray = [];

// Unsplash API
const count = 10;
const apiKey = '9IUuSYUDYK2e1rlLmbfQrmUkjaIkE8jpSFoKO9KeECQ';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        imgArray = await response.json();
        console.log(imgArray);
    } catch(error){
        // catch errors
    }
}

getPhotos();