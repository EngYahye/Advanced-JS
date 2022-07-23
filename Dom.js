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

// let typing=document.querySelector('.typing');
// let clone=document.querySelector('.clone');

// typing.addEventListener('keyup',()=>{
//     clone.innerText=typing.value
// })



// const request=new XMLHttpRequest();

// request.addEventListener('readystatechange',()=>{
//     if(request.readyState===4 && request.status===200){
//         console.log(request.responseText)
//     }
//     else if(request.readyState===4){
//         console.error('There is something!!')
//     }
// })

// request.open('GET','https://jsonplaceholder.typicode.com/posts/1');

// request.send();

// function shouldPrintFirst(callback){
//     setTimeout(()=>{
//         console.log('first')
//         callback()
//     },1000)
// }

// function shouldPrintSecond(){
//     console.log('second')
// }

// shouldPrintFirst(shouldPrintSecond)

//API with promises

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(response=>{
//     return response;
// }).then(data=>{
//     console.log(data)
// }).catch(err=>console.log(err))

//API with async await

const GetAPI=async()=>{
    const request=await fetch('https://jsonplaceholder.typicode.com/albums');
    const response= await request.json();
    return response;
}

GetAPI().then((data)=>{
    console.log(data)
}).catch((error)=>console.error(error))