const books=[
{title:"Wild Animals",desc:"Roar, jump, swim and guess your way through the wild!",animals:"🦁 🐘 🐒",cls:"wild"},
{title:"Domestic Animals",desc:"Meet familiar animals from the farm and home.",animals:"🐮 🐷 🐶",cls:"domestic"},
{title:"Sea Animals",desc:"Dive into an ocean of rhymes and amazing creatures.",animals:"🐙 🐬 🐠",cls:"sea"},
{title:"Insects and Bugs",desc:"Tiny creatures, colorful clues and big discoveries.",animals:"🐝 🦋 🐞",cls:"bugs"}
];
const grid=document.querySelector('#book-grid');
if(grid)grid.innerHTML=books.map(book=>`<article class="book-card"><div class="book-cover ${book.cls}"><strong class="cover-title">IT’S GUESSING TIME!</strong><span class="cover-animals">${book.animals}</span><strong>${book.title}</strong></div><h3>${book.title}</h3><p>${book.desc}</p></article>`).join('');
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();