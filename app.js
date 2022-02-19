const container = document.querySelector(".container");

//fetching image from an api
const getPost = async () => {
    try {
        const response = await fetch(`https://meme-api.herokuapp.com/gimme`)
        const data = await response.json();
        const title = data.title;
        const link = data.url;

        const img = document.createElement("img");
        const caption = document.createElement("p");
        img.src = link;
        caption.innerText  = title;
        container.appendChild(img);  
    
    } catch (err) {
        console.log('failed to load image');
    }      
}

let stopValue = 1;
async function loadImage(numImages = 4) {
    if (stopValue == 1) {
            for (let i = 1; i <= numImages ; i ++) {
                await getPost(); 
        }
        stopValue++;
        console.log('stop = '+ stopValue);
    }else{
            for (let i = 1; i <=2 ; i ++) {
                await getPost();             
            }
    }
    
}


loadImage()


let count = 1;
const ScreenHeight = document.documentElement.scrollHeight;
const height = document.body.offsetHeight;
window.addEventListener('scroll', ()=>{
    if (window.scrollY + window.innerHeight >= height) {
        count++;
        console.log('loading more images..');   
            loadImage()
        
    }
});

