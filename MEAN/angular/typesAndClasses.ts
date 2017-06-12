var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: Array<number> = [1,2,3,4];
var myObj: object = {name:"Billy"};
var anythingVariable: any = "Hey";
var anythingVariable: any = 25;
var arrayOne:Array<boolean> = [true, false, true, true];
var arrayTwo:Array<any> = [1, 'abc', true, 2];
var myObj: object = {x:5,y:10};

class MyNode {
    val: number;
    constructor(valueP: number) {
        this.val = valueP;
    };
}
let myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);

function myFunction(message:string): string {
    return message;
}
console.log(myFunction("Hello World"));

function sendingErrors(error:string): never{
    throw new Error(error);
}
sendingErrors("Error message");