export class Shape {
    name: string
    color: string
    constructor(name:string,color:string){
        this.name = name;
        this.color = color
    }
    getName():string{
        return this.name
    }
    getColor():string{
        return this.color
    }
    setName(name:string):void{
        this.name = name
    }
    setColor(color:string):void{
        this.color = color
    }
}