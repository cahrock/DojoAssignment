myNum = 5;
var myNum: number = 5;

myString = "Hello Universe";
var myString: string = "Hello Universe"

myArr = [1, 2, 3, 4];
var myArr: number[] = [1, 2, 3, 4];

myObj = { name: 'Bill' };
var myObj = { name: 'Bill' }

anythingVariable = "Hey";
var anythingVariable any = "Hey"

anythingVariable = 25;
var anythingVariable: string = 25;

arrayOne = [true, false, true, true];
var arrayOne: boolean[] = [true, false, true, true]

arrayTwo = [1, 'abc', true, 2];
var arrayTwo: any = [1, 'abc', true, 2];

myObj = { x: 5, y: 10 };
var myObj = { x: 5, y: 10 };

// object constructor
var MyNode = (function () {
    function MyNode(val: number) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        var _priv: number;
        this._priv = 10;
    };
    return MyNode;
}());

var myNodeInstnace = new MyNode(1);
console.log(myNodeInstnace.val);
function myFunction(): void {
    console.log("Hello World");
    return;
}
function sendingErrors() {
	throw new Error('Error message');
}
