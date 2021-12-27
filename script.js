'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// const renderCountry = function (data,className= ''){
//     const html = `
//     <article class = "country ${className}">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
    
    
    
//     </article>
//     `
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
// }

const wait = function (seconds){
    return new Promise( function( resolve){
        setTimeout(resolve, seconds*1000)
    })
}

const imgContainer = document.querySelector('.images')

const createImage = function(imgPath){
    return new Promise (function(resolve, reject){
        const img = document.createElement('img')
        img.src = imgPath

        img.addEventListener('load', function(){
            imgContainer.append(img)
            resolve(img)
        })

        img.addEventListener('error', function(){
            reject(new Error('Image not found'))
        })

    })

}


// // /part 2
// let currentImage;

// createImage('img/img-1.jpg').then(img =>{
//     currentImage = img
//     return wait(2)
// })
// .then(()=>{
//     currentImage.style.display = 'none'
//     createImage('img/img-2.jpg')
// })
// .then((img)=>{
//     currentImage = img
//     return wait(2)
    

// })
// .then(()=> {
//     currentImage.style.display = 'none'
// })
// .catch(err => console.log(err))




///////////////////////////////////////
const loadNPause = async function(){
    try {
        let img = await createImage('img/img-1.jpg')
        await wait(2)
        img.style.display ='none'

        img = await createImage('img/img-2.jpg')
        await wait(1)
        img.style.display ='none'

        img = await createImage('img/img-3.jpg')
    } catch (error) {
        console.log(error);
    }
}

// loadNPause()


const loadall = async function(imgArr){
    try {
        const imgs = imgArr.map(async img => await createImage(img))
        console.log(imgs);

        const imgsEl = await Promise.all(imgs)
        console.log(imgsEl);
        imgsEl.forEach(img => img.classList.add('parallel'))
    } catch (error) {
        console.log(error);
    }
}

loadall(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'])