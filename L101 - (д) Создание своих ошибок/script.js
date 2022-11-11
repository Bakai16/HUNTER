// 'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: '',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: 'span'
    }
];

try{
    data.forEach((blockObj, i) => {
      const block = document.createElement(blockObj.tag);

      if(!blockObj.id) throw new SyntaxError(`В данном под номером ${i + 1} нет id`);

      block.setAttribute('id', blockObj.id);
      document.body.append(block);
  });
}catch(e){
  if(e.name === 'SyntaxError'){
    console.log(e.message);
  }else throw e;
}

// console.log(e.name);
// console.log(e.message);
// console.log(e.stack);
