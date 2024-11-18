import {cars,bikes} from './arithmatic.js'
//import simpleInterest from './calculations.js'

// console.log(cars)

// const displayMyBikes=document.querySelector('.js-my-bikes');

// let bikesUnorderedList=document.createElement('ul')
// bikes.forEach(
//     (bike,index)=>{
//         let listItem = document.createElement('li');
//         listItem.innerHTML=`<li>I like to Ride ${bike}</li>`  
//         bikesUnorderedList.appendChild(listItem)
//     }
// );

// displayMyBikes.appendChild(bikesUnorderedList)
// console.log(simpleInterest(1000,5,3))

//<ul>
{/* <li>I like to Ride Suzuki</li>
<li>I like to Ride Honda</li>
<li>I like to Ride TVS</li> */}
//</ul>

const numbers=[10,21,31,41,50]
let doubleNumbers=[];


for(let i=0;i<numbers.length;i++)
{
    const newNumber=numbers[i]*2;
    doubleNumbers.push(newNumber);
}

console.log(doubleNumbers)


doubleNumbers=[]
numbers.forEach(
    (num)=>{
        const newNumber=num*2;
        doubleNumbers.push(newNumber);
    }
);
console.log(doubleNumbers)



const mappedDoubleNumbers=numbers.map(
    (num)=>{
        return num*2;
    }
);

console.log(mappedDoubleNumbers)


const newMappedDoubleNumbers=numbers.map(
    (num)=>{
        if(num%2==1)
        return num*2;
    }
);

console.log(newMappedDoubleNumbers)


const newFilteredDoubleOddNumbers=numbers.filter(
    (num)=>{
        return num%2==1
    }
).map(
    (oddNum)=>{
        return oddNum*2
    }
);

console.log(newFilteredDoubleOddNumbers)

    