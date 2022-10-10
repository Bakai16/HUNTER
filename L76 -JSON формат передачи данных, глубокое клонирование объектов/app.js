const persone ={
  name: "Alex",
  nomber: "+9838848484",
  parents:{
    mon: "Anna",
    dad: "Mike"
  }
};

const clone = JSON.parse(JSON.stringify(persone));
