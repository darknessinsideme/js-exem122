//1a.

let age = 16;

//1b.

const name = "Hasanu Zzaman";

//1c.

let isMarried = false;

//1d.

age ++;

//1e

age = 16;//because let give us way to change value it 

//1f

// name = "hi";//because if you declar the variable by useing const we can't change the value

//2a 

console.log(typeof(age));

//2b

console.log(typeof(name));

//2c

console.log(typeof(isMarried));

//2d

console.log(typeof ("4"));

//2e



let x ="123";


x = parseInt(x, 10);

console.log(typeof(x));

//2f

x = 123;

x=x.toString();

console.log(typeof(x))



//3a


let g;//Undefined means a variable has been declared, but the value of that variable has not yet been
console.log(g)

//3b

f = 0;//NaN is Not-A-Numbe
console.log(f)

//3c

console.log(typeof(NaN))



//4d 

console.log(typeof(g))

//3e

console.log(typeof(f))

//3f

let z = NaN;

let check = (z === NaN) ? "yes":"no"; 

console.log(check);

//3g

let correct= (g == 4) ? "yes":"no";// becauge Undefined value is not 4  

console.log(correct)

correct= (g === 4) ? "yes":"no";// becauge Undefined value and type is not as number 4  

console.log(correct)

//3h

correct= (g == null) ? "yes":"no";// becauge there is no value is assind   

console.log(correct)

correct= (g === null) ? "yes":"no";// becauge NaN type is not as null  

console.log(correct)
 
//4a

let sum = 10 + 15;

//4b
let result =3 + 4 * 2

console.log(result)

//4c

result += 3;

console.log(result)


//4d

let result1 = 20 - 8 - 2 - 4

console.log(result1)

//4e

result1 = 20 - (8 - 2) - 4

console.log(result1)

//4f

let greeting = "Hello," + "world"

console.log(greeting)

//4g

console.log("Hello".length)

//5a

console.log(typeof(true))

//5b

// if (x === 1){ console.log("if this is true do this") }

//5c

correct= (1 === 10) ? "True":"false";

console.log(correct)

//5d

correct= (10 === 10) ? "True":"false";

console.log(correct)

//5e

correct= (true === false) ? "True":"false";

console.log(correct)


//5f

let a = true;

let b = false;


//5g

console.log(!b)

//5h

console.log(typeof(!b))

//5i

correct= (a && b) ? "True":"false";

console.log(correct)

//5j

correct= (a || b) ? "True":"false";

console.log(correct)


//5k

correct= (false || false || false || true) ? "True":"false";

console.log(correct)

//5l

correct= (false && false && false && true) ? "True":"false";

console.log(correct)

//5m

correct= (a === true) ? "True":"false";

console.log(correct)

//5n

correct= (b === false) ? "True":"false";

console.log(correct)

//6a

let arr1 = [];

//6b

let arr2 = ["Beef", "Chicken", "Vegetarian"];

console.log(arr2.length)

//6c

let arr = ["10", "8", "1"]

arr[1]= "7";

console.log(arr)

//6d

arr.push("2")

console.log(arr)

//6e

arr.unshift("12")

console.log(arr)

//6f

console.log(arr[0])

//6g

// console.log(arr)

 function iterateLetters (arr){
 let myMessage = "";
 for (let i = 0; i < arr.length; i++) {
   myMessage += arr[i];
   if(i < arr.length-2){
     myMessage += ",  ";
   }
   else if (i < arr.length-1){
     myMessage += "  &  ";
   }
 };
 console.log(myMessage + ".");
};

iterateLetters (arr)

//6f

console.log([].length)

//6g

let ingredients = ["Banana", "Oats", "Milk"]//yes

ingredients.push("kota")

console.log(ingredients)

//6h

const ingredients1 = ["Banana", "Oats", "Milk"];

ingredients1.push("kota")

console.log(ingredients1)

//6k

arr1 = ["1", "2", "3"]
arr1.push("4")
arr1.shift()

arr2 = ["2", "3", "4"]

let arr3 =[]
for (let i = 0; i < arr2.length; i++) {
    arr3.push(1);}

console.log(arr1.length)

//6l

correct= (arr1 === arr2) ? "True":"false";

console.log(correct)

//6m

correct= (arr1[0] === arr2[0]) ? "True":"false";

console.log(correct)

//6n

console.log(arr3)

//7a

function five() {
return 5;
}
function add(a, b) {
return a + b;}
function run() {
    console.log("Running...");
}
function whatIsTheTypeOf(v) {
    console.log("The type of v is " + typeof v);
}


//7b

console.log(typeof five())

//7c

console.log(typeof(five))

//7d

//function add have 2 parameters

//7e

//function five dosen't have parameter

//7f

console.log(typeof(add(1, 2)))

//7g

console.log(typeof(add("Hello, ", "world")));

//7h

console.log(typeof (run()))

//7i

whatIsTheTypeOf(8)

//7j

whatIsTheTypeOf(run)

//8a

correct= (typeof "4" === typeof 4) ? "True":"false";

console.log(correct)

//8b

console.log(arr.length)

console.log(arr[4]);

//8c

function myfunction(arr){
  let cal = arr.length * 2;
   return cal
}

myfunction(arr)

//8d

function myFunction(name){
  console.log("Hello, "+name+", how are you doing?")
}

myFunction(name)


//8e


function myFunctions(name){
  console.log(`Hello, ${name}, how are you doing?`)
}
myFunctions(name)


//8f


ingredients = ["Banana", "Oats", "Milk"];
const commandString = "ls|cd|touch|cp";


function iterateLetters (arr){
 let myMessage = "";
 for (let i = 0; i < arr.length; i++) {
   myMessage += arr[i];
   if(i < arr.length-2){
     myMessage += ", ";
   }
   else if (i < arr.length-1){
     myMessage += " and ";
   }
 };
 console.log("For pancakes you will need " + myMessage + ".");
};
iterateLetters(ingredients);


//8








//1a.

let age = 16;

//1b.

const name = "Hasanu Zzaman";

//1c.

// let isMarried = false;

//1d.

// age ++;
//1e

//because let give us way to change value it

//1f
//because if you declar the variable by useing const we can't change the value
//2a
//Number
//2b
//string
//2c
//boolean
//2d
//string
//2e
console.log(typeof("Hello"))

"True"

"false"

true

"boolean"

"false"

"True"

"True"

"false"

"True"

"True"

3

["10", "7", "1"]

["10", "7", "1", "2"]

["12", "10", "7", "1", "2"]

"12"

"For pancakes you will need 12, 10, 7, 1 and 2."

0

["Banana", "Oats", "Milk", "kota"]

["Banana", "Oats", "Milk", "kota"]

3

"false"

"True"

[1, 1, 1]

"number"

"function"

"number"

"string"

"Running..."

"undefined"

"The type of v is number"

"The type of v is function"

"false"

5

"2"

"Hello, Hasanu Zzaman, how are you doing?"

"Hello, Hasanu Zzaman, how are you doing?"

"For pancakes you will need Banana, Oats and Milk."

"ls|cd|touch|cp"

"number"

"string"

"boolean"

"string"

"number"

"string"

undefined

0

"number"

"undefined"

"number"

"no"

"no"

"no"

"yes"

"no"

11

14

6

10

"Hello,world"

5

"boolean"

"false"

"True"

"false"

true

"boolean"

"false"

"True"

"True"

"false"

"True"

"True"

3

["10", "7", "1"]

["10", "7", "1", "2"]

["12", "10", "7", "1", "2"]

"12"

"For pancakes you will need 12, 10, 7, 1 and 2."

0

["Banana", "Oats", "Milk", "kota"]

["Banana", "Oats", "Milk", "kota"]

3

"false"

"True"

[1, 1, 1]

"number"

"function"

"number"

"string"

"Running..."

"undefined"

"The type of v is number"

"The type of v is function"

"false"

5

"2"

"Hello, Hasanu Zzaman, how are you doing?"

"Hello, Hasanu Zzaman, how are you doing?"

"For pancakes you will need Banana, Oats and Milk."

"ls|cd|touch|cp"
