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

// console.log(newFilteredDoubleOddNumbers)

// const smallNumbers=[1,2,3,4,5]
// const oddNumbers=smallNumbers.filter(
//     (num)=>{
//         return num%2==1
//     }
// );

// console.log(oddNumbers)

// const oddNumberDoubled=oddNumbers.map(
//     (num)=>{
//         return num*2
//     }
// );
// console.log(oddNumberDoubled)


console.log(newFilteredDoubleOddNumbers)

const smallNumbers=[7,8,3,6,12]
const oddNumberDoubled=smallNumbers.filter(
    (num)=>{
        return num%2==1
    }
).map(
    (num)=>{
        return num*2
    }
);
console.log(oddNumberDoubled)


const newSmallNumbers=[7,8,3,6,12]
const value=newSmallNumbers.find(
    (num)=>{
        return num%2==1
    }
);

console.log(value)


const newVerySmallNumbers=[7,8,23,6,12]
const arraySum=newVerySmallNumbers.reduce(
    (num,accumulator)=>{
        return num+accumulator
    },100
);

console.log(arraySum)


const sampleArray=[7,8,23,6,12];
const sumOfAllOddNumbers=sampleArray.filter(
    (num)=>{
        return num%2==1
    }
).reduce(
    (num,acc)=>{
        return num+acc
    }
);

console.log(sumOfAllOddNumbers)

                    //0 1 2  3  4
const newsampleArray=[7,8,23,6,12];    //7,1,2,3,6,12

const slicedArray=newsampleArray.splice(1,2,...[8,8,8]);
console.log(newsampleArray)
console.log(slicedArray)