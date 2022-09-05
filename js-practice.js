// Queue implementation in js
function Queue(){
	var storage = {},
		head = 0,
		tail= 0;
    
	return {
		enQueue: function(item){
			storage[tail] = item;
		  	tail++;
		},
		deQueue: function(){
			var size = tail - head;

			if (size <= 0) return undefined;

			var item = storage[head];
			
			delete storage[head];

			head++;

			//Reset the counter
			if (head === tail){
				head = 0;
				tail = 0;
			}
			
			return item;
		},
		size: function(){
			return tail - head;
		},
		peek: function(){
			return storage[tail - 1];
		},
		print: function(){
			var result = [];
        console.log(storage);
			for (var key in storage){
				result.push(storage[key]);
			}

			return result;
		}
	}
}

var DSq = Queue();
console.log(DSq);

console.log(DSq.size());


DSq.enQueue("10");
DSq.enQueue("12");
DSq.enQueue("13");
// DSq.enQueue("maruti");
// DSq.enQueue("i1o");
console.log(DSq.peek());
DSq.enQueue("8");
console.log(DSq.deQueue());
DSq.enQueue("9");
console.log(DSq.peek());
console.log(DSq.deQueue());
// console.log(DSq.size());
// console.log(DSq.peek());
// console.log(DSq.deQueue());
// console.log(DSq.size());
// console.log(DSq.peek());
// console.log(DSq.print());


// polyfill for map Arr.map((num,i,arr) => {})

Array.prototype.myMap  = function(cb){
    let temp =[];
    for(let i =0 ; i <this.length;i++){
        temp.push(cb(this[i],i,this));
    }

    return temp;
}

const nums =[1,2,3,4];

const multiplyByThree = nums.myMap((num,i,arr) => {
    return num*3;
})

console.log(multiplyByThree)

// polyfill for filter


Array.prototype.myFilter = function(cb){
    let temp=[];
    for(let i =0;i<this.length;i++){
        if(cb(this[i],i,this)){
            temp.push(this[i]);
        }
    }

    return temp;
}


const graterThan2 = nums.myFilter((num,i,arr) =>{
    return num > 2;
})

console.log(graterThan2);


// Polyfills for reduce arr.reduce((acc,curr,i,arr) => {} , initalValue)

Array.prototype.myReduce = function(cb,initalValue){
    var accumulator = initalValue;

    for(let i =0;i <this.length;i++){
        accumulator = accumulator?cb(accumulator,this[i],i,this):this[i];
    }

    return accumulator;
}


const sum  = nums.myReduce((acc,curr,i,arr) =>{
    return acc = acc + curr;
})

console.log(sum)

// map vs for each

const arr =[2,5,3,4,7];

const mapResult = arr.map((ar) =>{
    return ar +2;
})

const forEachResult = arr.forEach((ar,i) =>{
    arr[i] = ar + 3;
});

console.log(mapResult,forEachResult,arr);


// map returns a new array without modifiying the original array whearas foreach doesnt return anything and modifes the original array
// map can be further chained since it returns an array whearrs not in case of foreach since it returns nothing



// map,filter and reduce - O/P based questions
// Q1 - Return only name of Students in capital

let students=[
    {name:"Piyush",rollNumber:31,marks:80},
    {name:"Jenny",rollNumber:15,marks:69},
    {name:"Kaushal",rollNumber:16,marks:35},
    {name:"Dilpreet",rollNumber:7,marks:55},
  ];

  let names = [];

//   using for 

  for(let i =0;i<students.length;i++){
      names.push(students[i].name.toUpperCase());
  }

  console.log(names)

//   using map 

const nameUPc = students.map(stu => stu.name.toUpperCase());

console.log(nameUPc);

// map,filter and reduceO/PBased Questions
// Question2-Return only details of those who scored more than 60 marks


// using for 


let markssixty = [];

for(let i= 0 ;i <students.length ;i++){
    if(students[i].marks>60){
        markssixty.push(students[i]);
    }
}

console.log(markssixty)


// using filter 


let filterdStudent = students.filter((stu) =>stu.marks>60)

console.log(filterdStudent);

// map,filter and reduce0/PBased Questions
// Question3-More than 60 marks and rollNumber grater than 15

let conditionStudent = students.filter((stu) => stu.marks>60 && stu.rollNumber>15);
console.log(conditionStudent)

// map,filter and reduce-O/PBased Questions
// Question4Sum of marks of all students

// using for 

let sumMarks = 0;
for(i=0;i<students.length;i++){
    sumMarks =sumMarks + students[i].marks;
}

console.log(sumMarks);

// using reduce

let reducedMarks = students.reduce((acc,cur) => {
    return acc + cur.marks;
},0)

console.log(reducedMarks)

// map,filter and reduceO/PBased Questions
// Question5-Return only names of students who scored more than 60


let question5student = students.filter(stu => stu.marks>60).map(i => i.name);

console.log(question5student)

// map,filter and reduceO/PBased Questions
// Question6-Return total marks for students with marks grater than 60
// after 20 marks have been added to those who scored less than 60


let question6Ans = students.map((stu) =>{
    if(stu.marks < 60){
        stu.marks += 20;
    }
    return stu
})
.filter((stu) => stu.marks>60)
.reduce((acc,cur) =>acc + cur.marks,0)

console.log(question6Ans)


// Functions in Javascript
// Q1-What is Function Declarations?
function square(num){
    return num*num;
  }

  // Functions in Javascript
// Q2-What is Function Expression?
// when you store a function inside a variable its called function expression.

const squareExp=function(num){
    return num*num;
  };

  // Functions in Javascript
// Q3-What are First Class Functions?
// where a function can be treated like a variable , can be passed into another function , manipulated , used and returned  
// everything a varaible can do a function can also do



function squareF(num){
    return num*num;
  }
  function displaySquare(fn){
    console.log("Square is"+fn(5));
  }
  displaySquare(square);
                                            
  // Functions in Javascript
// Q4-What is IIFE?

(function squareIfe(num){
    console.log(num*num);
})(5);

// Functions in Javascript
// Q5-IIFE-0/PBased Question?

(function(x){
  return (function(y){
 console.log(x);
  })(2);
})(1);

// searches for x in parent scope

// Q7 - Function Scope - O/p Based Question

for(let i =0 ;i <5 ;i++){
    setTimeout(function(){
        console.log(i)
    },i*1000)
}
// since let is BlocK scoped prints 0,1,2,3,4 if used var instead 5,5,5,5,5 

// Q8 -Function Hoisiting

function functionName() {
    console.log("worktech")
}

functionName();

// functions are hoisted completely


// Q9- Function Hoisting - O/P Based Question

var x =21;

var fun = function(){
    console.log(x);
    var x = 20;
}

fun();

// creates a seperate execution context for that function / local scope 
// When we have a variable in the scope we will not go and check the global scope


// Q-10 Params vs Arguments

function squarePA(num){ // Params
    console.log(num*num);
}

squarePA(5); //Arguments

function multiply(...nums){ // rest
    console.log(nums[0]*nums[1]);
}

var arrm = [5,6];

multiply(...arrm); // spread

// Q-11 Params vs arguments -O/P based question

const fn = (a,x,y, ...numbers) => {
    console.log(x,y);
};

fn(5,6,3,7,8,9,10);

// rest parameter should be the last prameter 

// Q12 - Callback Function

// A callback function is a function passed into another function as an argument , which is then invoked inside the outer function to complete some kind of routine or action

// function greeting(name){
//     console.log('hello' + name);
// }

// function processUserInput(callback){
//     var name = prompt('please enter your name');
//     callback(name);
// }

// processUserInput(greeting);


// Q-13 arrow functions

const addArrow = (firstnum,secondnum) => firstnum + secondnum;

// Q-14 arrow functions vs normal function
// 1 syntac=x different 

function q141(num){
    return num * num
}

const q141Arrow = (num) => num*num;

// 2 implicit return keyword

const q142= (num) => num*num;

// 3 arguments
// can't have arguments keyword inside a arrow function

function fnnormal(){
    console.log(arguments);
}

fnnormal(1,3,2);

const fnArray = () =>{
    console.log(arguments);
}

fnArray(3,4,5);

// 4  this keyword

let player  = {
    username:"no name",
    rc1:  () => {
        console.log("name",this.username)
    },
    rc2(){
        console.log("name",this.username);
    },
};

player.rc1();
player.rc2();