const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');


// box.style.backgroundColor = "blue";
// box.style.width = "500px";

box.style.cssText = "background-color: black; width: 500px";

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor ='red';

// for(let i = 0; i < hearts.length; i++){
//       hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
      item.style.backgroundColor = "yellow";
});

const div = document.createElement('div');
// const text = document.createTextNode("Тут был я");

div.classList = 'black';

wrapper.append(div);
// wrapper.appendChild(div);


// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[0]);


// circles[0].remove(); 
// wrapper.removeChild(hearts[0]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello</h1>";

div.insertAdjacentHTML("beforebegin", '<h2>Hello Bakai</h2>');

// div.textContent = "hello";

