let element=document.getElementById('main');

const newElemt=document.createElement('p');

const newContent=document.createTextNode("How to add new content to the DOM Dynamicly");

newElemt.append(newContent)

element.append(newElemt);
const newElemt2=document.createElement('p');

const newContent2=document.createTextNode("How to add new content to the DOM Dynamicly");

newElemt2.append(newContent2)

element.appendChild(newElemt2);
newElemt2.remove()

console.log(element)