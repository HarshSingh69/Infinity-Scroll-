const imgContainer = document.getElementById('img-container');
const loader = document.getElementById('loader');

let imgArray = [];

// Unsplash API
const count = 10;
const apiKey = '9DbHpc2nkfmYrJmguj27YXZJ51VzzTpBhiNTdpWO69Y';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Helper function
function setAttributes(element,attributes){
    for(const key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}
// Create elements for links & photos add to DOM
function displayimages(){
    // run for each in imageArray
    imgArray.forEach((photo)=> {
        // create <a> to link to Unsplash
        const item = document.createElement('a');
        // item.setAttribute('href',photo.links.html);
        // item.setAttribute('target','_blank');
        setAttributes(item,{
            href:photo.links.html,
            target:'_blank'
        });
        // // create <img> for photo 
        const image = document.createElement('img');
        // image.setAttribute('src', photo.urls.regular);
        // image.setAttribute('alt', photo.alt_description);
        // image.setAttribute('title', photo.alt_description);
        setAttributes(image,{
            src:photo.urls.regular,
            alt:photo.alt_description,
            title:photo.alt_description
        });
        // put <img> inside <a>, then put both into image-container
        item.appendChild(image);
        imgContainer.appendChild(item);
    });
}

// Get photos from Unsplash API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        imgArray = await response.json();
        displayimages();
    } catch(error){
        // catch errors
    }
}

// creating a scroller to load more pages
window.addEventListener('scroll',()=>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){
        getPhotos();
        console.log('load more')
    }
});
getPhotos();