class Parent {
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}
class Baby extends Parent{
    constructor(name){
        super();
        this.name = name;
    }

    getFulDetail(){
        return this.name + " " + this.fatherName;
    }
}

const child = new Baby("Sylvester Stallone");
const child2 = new Baby("Tom Cruise");
console.log(child.getFulDetail());
console.log(child2.getFulDetail());