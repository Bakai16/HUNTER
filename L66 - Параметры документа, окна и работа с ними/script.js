const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// const width = box.clientWidth;  // 385
// const height = box.clientHeight; // 335
// const width = box.offsetWidth;  // 400
// const height = box.offsetHeight; // 350
const width = box.scrollWidth;  // 385 
const height = box.scrollHeight; // 1389


console.log(width, height);

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + "px";
});

console.log(box.getBoundingClientRect());


const style = window.getComputedStyle(box);

console.log(style.display);

console.log(document.documentElement.scrollTop);

window.scrollBy(0, 400);
window.scrollTo(0, 400);


