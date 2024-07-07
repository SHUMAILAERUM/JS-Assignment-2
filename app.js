// Question 1:

let cityName = prompt("Enter city name")

if (cityName === "karachi") {

    alert("“Welcome to city of lights”")
}

//Question 2:

let gender = prompt("Enter your gender");

if (gender === "male") {

    alert("Good Morning Sir.")

}else if (gender === "female") {

    alert("Good Morning Ma’am.")
}

//Question 3:

let color = prompt("Enter color from traffic signal")

if (color === "red") {

    alert("Must Stop")

}else if(color === "yellow") {

    alert("Ready to move")

}else if (color === "green") {

    alert("Move now")
 }

//Question 4:

let fuel = parseInt(prompt("Remaining fuel in car in litres"))

if ( fuel < "0.25") {

    alert("“Please refill the fuel in your car”")
}

//Question 5: a:

var a = 4;

if (++a === 5){

alert("given condition for variable a is true"); 

}

//Question 5: b:

var b = 82;

if (b++ === 83){

alert("given condition for variable b is true");
}

//Question 5: c:

var c = 12;

if (c++ === 13){

alert("condition 1 is true");

}

if (c === 13){

alert("condition 2 is true");          

}
if (++c < 14){

alert("condition 3 is true");

}
if(c === 14){                             

alert("condition 4 is true");            

}

//Question 5: d:

var materialCost = 20000;

var laborCost = 2000;

var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost){

alert("The cost equals " + totalCost);          

}

//Question 5: e:

if (true){

alert("True");         
}

if (false){             

alert("False");
}

//Question 5: f:

if("car" < "cat"){

alert("car is smaller than cat"); 

}

//Question 6:

let totalMarks = parseInt(prompt("Enter total marks"))

let marksObtained = parseInt(prompt("please enter marks obtained in three subjects"))

let percentage = ((marksObtained/totalMarks)*100).toFixed(2) 


if (percentage >= 80) {

    document.write("<h2>Marks Sheet</h2> <br><br><br>")
    document.write("Total marks:  " + totalMarks + "<br>")
    document.write("Marks obtained:  " + marksObtained + "<br>")
    document.write("Percentage:  " + percentage + "% <br>")
    document.write("Grade:  A-one <br>")
    document.write("Remarks:  Excellent <br>")

}else if (percentage >= 70) {

    document.write("<h2>Marks Sheet</h2> <br><br><br>")
    document.write("Total marks:  " + totalMarks + "<br>")
    document.write("Marks obtained:  " + marksObtained + "<br>")
    document.write("Percentage:  " + percentage + "% <br>")
    document.write("Grade:  A <br>")
    document.write("Remarks:  Good <br>")

} else if (percentage >= 60) {

    document.write("<h2>Marks Sheet</h2> <br><br><br>")
    document.write("Total marks:  " + totalMarks + "<br>")
    document.write("Marks obtained:  " + marksObtained + "<br>")
    document.write("Percentage:  " + percentage + "% <br>")
    document.write("Grade:  B <br>")
    document.write("Remarks:  You need to improve <br>")

}else if (percentage < 60){

    document.write("<h2>Marks Sheet</h2> <br><br><br>")
    document.write("Total marks:  " + totalMarks + "<br>")
    document.write("Marks obtained:  " + marksObtained + "<br>")
    document.write("Percentage:  " + percentage + "% <br>")
    document.write("Grade: Fail <br>")
    document.write("Remarks:  Sorry <br>")
}


//Question 7:

let number = 8

let guessNumber = parseInt(prompt("Please Guess a Number"))

if (guessNumber === number) {

    alert("“Bingo! Correct answer.")
}else if (guessNumber === number + 1) {

    alert("“Close enough to the correct answer”.")
}

//Question 8:

let num = parseInt(prompt("please enter a number"))

if (num % 3 === 0) {

    alert(num + " is divisible by 3.")
}else {

    alert(num + " is not divisible by 3.")
}

//Question 9:


let numb = parseInt(prompt("Please enter a number"))

if((numb % 2 ) === 0){

    alert(numb + " is an even number")
}
else {
    alert(numb + " is an odd number")
}

//Question 10:


let t = parseInt(prompt("Please enter temperature"))

if(t > 40){

    alert("“It is too hot outside.”")
}
else if(t > 30){

    alert("“The Weather today is Normal.”")
}
else if(t > 20){

    alert("“Today’s Weather is cool.”")
}
else if(t > 10){

    alert("“OMG! Today’s weather is so Cool.”")
}

//Question 11:

let number1 = parseInt(prompt("enter first number"))
let number2 = parseInt(prompt("enter second number"))
let operation = prompt("select any one operation + , - , * , / " )


if (operation === "+"){

    let answer = number1 + number2
    alert(answer)
}
else if (operation === "-"){

    let answer = number1 - number2
    alert(answer)
}
else if (operation === "*"){

    let answer = number1 * number2
    alert(answer)
}
else if (operation === "/"){

    let answer = number1 / number2
    alert(answer)
}
