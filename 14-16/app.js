// Question 1

let studentname = [];

// Question 2

let StudeNtname = new Array();

// Question 3

let str = [ "i am string array"];

// Question 4

let num = [ 1 , 2 , 3];

// Question 5

let bool = [true , false];

// Question 6

let mix= [ "i am mixed array" , 2  , true ];


// Question 7

let qualific = [ " SSC " , " HSC " , " BCS ", " BS " , " B COM " , " MS ", " M. Phil " , " PhD "]
let b = 1
document.write("<h1>Qualification </h1>")
for( let i = 0 ; i < qualific.length ; i++){
     document.write("<p>" + b + "     " + "  " + qualific[i] + "</p>")
     b++
}

// Question 8

let stname = ["Amna" , "maha" , "Asghar"]

let stscore = [ 320 , 230 , 480]

let totalscore = 500
for ( let c  = 0 ; c < stname.length ; c++){
    let per = ( stscore[c] / totalscore)*100
    document.write( "<p>" +"Score of " + stname[c]  + " is "+  stscore[c]   +"." +"Percentage"+" "+ " " + per + "%" + "</p>")
}

// Question 9

let color = [ " red " , " pink " , " orange " , ]


document.write("<p>" +"[  " + color +"  ] "+ "</p>")

var addcolor = prompt("add one color you like to add in begining").toLocaleLowerCase()

color.unshift(addcolor)

document.write("<p>" +"[  " + color +"  ] "+ "</p>")

var addcolor = prompt("add one color you like to add in end ").toLocaleLowerCase()

color.push(addcolor)

document.write("<p>" +"[  " + color +"  ] "+ "</p>")

var addcolor = prompt("add one color you like to add in begining").toLocaleLowerCase()

color.unshift(addcolor)

var addcolor = prompt("add one color you like to add in begining").toLocaleLowerCase()

color.unshift(addcolor)

document.write("<p>" +"[  " + color +"  ] "+ "</p>")

var delcolor = prompt(" enter color you like to delete from begining").toLocaleLowerCase()

color.shift(delcolor)

document.write("<p>" +"[  " + color +"  ] "+ "</p>")

var delcolor = prompt(" enter color you like to delete from end ").toLocaleLowerCase()

color.pop(delcolor)

document.write("<p>" +"[  " + color +"  ] "+ "</p>")

let bychoice = parseInt(prompt("enter index number where you wnat to add color "))

let byaddcolor = prompt("enter name of color you like to add in begining").toLocaleLowerCase()

color.splice(bychoice, 0 , byaddcolor)

document.write("<p>" +"[  " + color +"  ] "+ "</p>")

let bydechoice = parseInt(prompt("enter index number which you wnat to delete color "))

let bynumchoice = parseInt(prompt("enter number of color you want to delete "))

color.splice(bydechoice, bynumchoice)

document.write("<p>" +"[  " + color +"  ] "+ "</p>")

// Question 10

let scro = [ 320 , 230 , 480 , 120]

document.write("<p>" +"[  " + scro +"  ] "+ "</p>")

scro.sort()

document.write("<p>" +"[  " + scro +"  ] "+ "</p>")

// Question 11

let city = [ " 1) karachi " , " 2) islamabad " , " 3) quetta " , " 4) peshawar" ]

let seleccity = parseInt(prompt("enter number of element "))

let newcity = []
 
newcity.push(city[seleccity-1])

document.write("<p>" +"[  " + newcity+"  ] "+ "</p>")

// Question 12

let mystr = [" this " , " is " , " my " , " cat "];

let comstr = mystr.join( " ")

document.write("<p>" +"[  " + comstr +"  ] "+ "</p>")

// Question 13

let mycom = []
let comp1 = prompt("eneetr what you want to add").toLocaleLowerCase()

mycom.push(comp1)

let comp2 = prompt("eneetr what you want to add").toLocaleLowerCase()

mycom.push(comp2)

let comp3 = prompt("eneetr what you want to add").toLocaleLowerCase()

mycom.push(comp3)

let comp4 = prompt("eneetr what you want to add").toLocaleLowerCase()

mycom.push(comp4)

let comp5 = prompt("eneetr what you want to add").toLocaleLowerCase()

mycom.push(comp5)

console.log(mycom)

document.write("<p>" +"[  " + mycom +"  ] "+ "</p>")

for ( m = 0 ; m < 5 ; m++){
     var newpp = mycom.shift()

     document.write("<p>" +"[  " + newpp +"  ] "+ "</p>")
}
// Question 14

let mycom1 = []
let comp11 = prompt("eneetr what you want to add").toLocaleLowerCase()

mycom1.push(comp11)

let comp12 = prompt("eneetr what you want to add").toLocaleLowerCase()

mycom1.push(comp12)

let comp13 = prompt("eneetr what you want to add").toLocaleLowerCase()

mycom1.push(comp13)

let comp14 = prompt("eneetr what you want to add").toLocaleLowerCase()

mycom1.push(comp14)

let comp15 = prompt("eneetr what you want to add").toLocaleLowerCase()

mycom1.push(comp15)

console.log(mycom1)

document.write("<p>" +"[  " + mycom1 +"  ] "+ "</p>")

for ( m = 0 ; m < 5 ; m++){
     var newpp1 = mycom1.pop()

     document.write("<p>" +"[  " + newpp1 +"  ] "+ "</p>")
}

// Question 15

let phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (let l = 0; l < phone.length; l++) {
    document.write("<option value='" + phone[l] + "'>" + phone[l] + "</option>");
}
document.write("</select>");

