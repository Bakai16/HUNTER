
class Rectangle{
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calcArea(){
    return this.width * this.height;
  }
}

class ColoredRectangleWidthText extends Rectangle{
  constructor(width, height, text, bgColor){
    super(height, width);
    this.text = text;
    this.bgColor = bgColor;
  }

    showMyProps(){
      console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}
const div = new ColoredRectangleWidthText(20, 25, 'Hello', 'red');

div.showMyProps();


// const square = new Rectangle(10, 10);

// console.log(square.calcArea());
