// let element=document.getElementById('main');

// const newElemt=document.createElement('p');

// const newContent=document.createTextNode("How to add new content to the DOM Dynamicly");

// newElemt.append(newContent)

// element.append(newElemt);
// const newElemt2=document.createElement('p');

// const newContent2=document.createTextNode("How to add new content to the DOM Dynamicly");

// newElemt2.append(newContent2)

// element.appendChild(newElemt2);
// newElemt2.remove()

// console.log(element)
// Add class
// let div=document.querySelector('div');
// div.classList.add('error');
// div.classList.remove('error')

// div.classList.add('success');

// // Add styling

// let p=document.querySelector('p');
// p.style.fontSize='18px';

// div.style.border='2px solid #cac2c1'

let btn=document.querySelector('button');

// click Event
// btn.addEventListener('click',()=>{
//     document.body.style.background='#434344'
// })

// Mouse Events

    // Mouseover
// btn.addEventListener('mouseover',()=>{
//     alert('moseover')
// })

// mouseLeave

// btn.addEventListener("mouseleave",()=>{
// btn.style.background='blue'
// })
// btn.addEventListener("mousedown",()=>{
// alert('mousDown')
// })

let typing=document.querySelector('.typing');
let clone=document.querySelector('.clone');

typing.addEventListener('keyup',()=>{
    clone.innerHTML=typing.value
})
