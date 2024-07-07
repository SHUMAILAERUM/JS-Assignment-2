// Question 1

let mix = prompt("enter a character")
 let g = mix.charCodeAt(0)
if ( (g >= 65) && (g <= 90) ){
    document.write("<p>" + mix +" is upper case "+ "</p>")
}else if ( (g >= 97) && (g <= 122) ){
    document.write("<p>" + mix +" is lower case "+ "</p>")
}else if ((g >=48) && (g <= 57)){
    document.write("<p>" + mix +" is is a number "+ "</p>")
}

// Question 2

let num1 = parseInt(prompt("enter first number"))
let num2 = parseInt(prompt("enter second number"))
if ( num1 > num2){
    document.write("<p>" + num1 + " is greater than " + num2 + "</p>")
}
else if (num1 < num2){
    document.write("<p>" + num2 + " is greater than " + num1+ "</p>")
}
else{
    document.write("<p>" +  " both numbers are greater " + "</p>")
}

// Question 3

let num = parseInt(prompt("enter a number"))

if ( num > 0){
    document.write("<p>" + num+ " is positive " + "</p>")
}
else if(num < 0 ){
    document.write("<p>" + num + " is negative " + "</p>")
}
else{
    document.write("<p>" + num + " is zero " + "</p>")
}

// Question 4

let vow = prompt("enter a character")

let vo = [ "a" ,"e" ,"i" , "o" , "u","A" ,"E" ,"I" , "O" , "U"]

let flag = false
for(let i = 0 ; i < vo.length ; i++){

    if ( vow === vo[i]){
        document.write("<p>" +  " enter character is a vowel " + "</p>")
        flag=true
    }
}
if(!flag){
    document.write("<p>" +  " enter character is not a vowel " + "</p>")
}


// Question 5

let password = "123456"

let enterpass = prompt("enter password")

if( password === enterpass){
    document.write("<p>" +  "Correct! The password you entered matches the original password." + "</p>")
}
else if (enterpass === ""){
    document.write("<p>" +  "please enter password" + "</p>")
}
else{
    document.write("<p>" +  "your password is incorrect" + "</p>")
}

// Question 6

var greeting;
var hour = 13;
if (hour < 18) { 
  greeting = "Good day";
  alert(greeting)
}
else{  
   greeting = "Good evening";
   alert(greeting)
}

// Question 7

let time = parseFloat(prompt("enter time in 24 formate"))

if ( time <= 24){
    if( (time >= 0 ) && (time < 12)){
        alert("good morning")
    }
    else if ( (time >=12 ) && (time < 17)){
        alert("good afternoon")
    }
    else if ( (time >=17 ) && (time < 21)){
        alert("good evening")
    }
    else if ( (time >=21 ) && (time <= 24)){
        alert("good night")
    }
}else{
    alert("enter correct time")
}