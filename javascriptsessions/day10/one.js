import {carBrands,cars} from './data.js'

let htmlUnorderedCarsBrandsList='<ul>';

carBrands.forEach(
    (car)=>{
        htmlUnorderedCarsBrandsList+= `<li>${car}</li>`
    });

    htmlUnorderedCarsBrandsList+='</ul>'

const carBrandsDivElement=document.querySelector('.js-my-cars-brands')
carBrandsDivElement.innerHTML=htmlUnorderedCarsBrandsList

let htmlUnorderedCarNamesList='<ul>';
cars.forEach(
    (car)=>{
        htmlUnorderedCarNamesList+=`<li>${car.carName}</li>`
    }
);

htmlUnorderedCarNamesList+='</ul>';

const carsNamesDivElement=document.querySelector('.js-my-cars-names')
carsNamesDivElement.innerHTML=htmlUnorderedCarNamesList


{/* <ul>
    <li>Audi</li>
    <li>BMW</li>
    <li>Tata</li>
    <li>Honda</li>
</ul> */}