import { Shape } from "./Shape";
class Triangle extends Shape {
    side1: number;
    side2: number;
    side3: number;
    constructor(name: string, color: string, side1: number, side2: number, side3: number) {
        super(color, name)
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    getArea() :number{
        let p = (this.side1 + this.side2 + this.side3)/2
        return Math.sqrt(p*(p-this.side1)*(p-this.side2)*(p-this.side3))
    }
    perimeter():number{
        return this.side1 + this.side2 + this .side3
    }
} 