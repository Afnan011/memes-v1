console.log('everything is set');
const url = "https://joeschmoe.io//api/v1/random";
const container = document.querySelector(".container");

//random number geenerator function
function getRandomNumber() {
    let num =  Math.floor(Math.random()* 100);
    if (num < 10) {
        getRandomNumber()
    }else{
        return num;
    }
}


//fetching image from an api
const getPost = async () => {
    const img = document.createElement("img");
    const response = await fetch(`https://meme-api.herokuapp.com/gimme`)
    const data = await response.json();
    const title = data.title;
    const link = data.url;

    const caption = document.createElement("p");
    img.src = link;
    caption.innerText  = title;
    container.appendChild(img);        

}

function loadImage(numImgages = 6) {
    let i = 0;
    while (i < numImgages) {
        getPost();
        i++;
    }
    numImages = getRandomNumber()
}



loadImage()



const ScreenHeight = document.documentElement.scrollHeight;
window.addEventListener('scroll', ()=>{
    if (window.scrollY + window.innerHeight >= ScreenHeight) {
        console.log('loading more images');   
        loadImage()
    }
});

// async function loadImage(){ 
//     const myTimeout = setTimeout(sleep, 300);
//     async function sleep() {
//         img.src = "https://miro.medium.com/max/700/1*CsJ05WEGfunYMLGfsT2sXA.gif"
//         setImage()
//     }
// }
 

// async function setImage(){
//     fetch('https://meme-api.herokuapp.com/gimme')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.url);
//         img.src = data.url
//         let name =  data.title;
//         if ((name == "me irl") || (name == "me_irl") || (name == "Me irl") || (name == "Me_irl")){
//                 title.innerText = "Memes"
//         }else{
//             title.innerText = name
//         }
//     }).catch(err => console.error(err));  
// }