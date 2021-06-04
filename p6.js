function perimeterFunc(total, num) { 
    //console.log(`Total: ${total}; Num: ${num}`);
    return total + num
};

class Shape {
    constructor(sides = []) {
      this.sides = sides;
      this.perimeter = () => (this.sides != null ? this.sides.reduce(perimeterFunc) : 0 );
    }
  }
/*
  console.log(new Shape([5, 10]).perimeter());  // 15
  console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
  console.log(new Shape().perimeter()); // 0
*/
 class Rectangle extends Shape{
     constructor(length = 0 , width = 0) {
         super([length,width,length,width]);
         this.length = length;
         this.width = width;
         this.area = () => this.length * this.width;
     }
 };
/*
console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16 works
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25 works
console.log(new Rectangle().perimeter()); // 0 
console.log(new Rectangle().area()); // 0 works
*/
class Triangle extends Shape{
    constructor(sideA = 0 , sideB = 0 , sideC = 0){
        super([sideA, sideB, sideC]);
        this.sideA = sideA;
        this.sideB = sideB; 
        this.sideC = sideC; 
        let s = (sideA + sideB + sideC)/2
        this.area = () => Math.sqrt(
            s * (s - sideA) * (s - sideB) * (s - sideC)
        );
    }
};
/*
console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0
*/

// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];

for (sides of data) {
    switch (sides.length)
    {
        case 3: 
        console.log(`Triangle with sides ${sides} has a perimeter of ${new Triangle(...sides).perimeter()} and area of ${new Triangle(...sides).area()}`)
        break; 
        
        case 2: 
        let length = sides[0];
        let width = sides[1];
        let shapeName = length == width ? "Square" : "Rectangle";
        console.log(`${shapeName} with sides ${sides} has a perimeter of ${new Rectangle(...sides).perimeter()} and area of ${new Rectangle(...sides).area()}`)
        break; 

        default:
            console.log(`Shape with ${sides.length} sides is unsupported`)
            break;
    };
};
