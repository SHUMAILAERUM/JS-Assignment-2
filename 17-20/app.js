// Question 1 and 2

let myarray = [[0 , 1 , 2 , 3],[ 1 , 0 , 1 , 2],[2 , 1 , 0 , 1]];

// Question 3

for( let i = 1 ; i <= 10 ; i++){

    document.write("<p>" + i + "</p>")
}

// Question 4

let numtable = parseInt(prompt("enter your table number"));

let manytime = parseInt(prompt("enter how many times you want to multiply"));

for ( let b = 1  ; b <= manytime ; b++){

    document.write("<p>" + numtable + " x " + b + " = " + numtable*b + "</p>")
}

// Question 5

let fruites = [ " apple " , " banana " , " orange " , " strawberry "]

for ( let c = 0 ; c < fruites.length ; c++){
    
    document.write("<p>" + fruites[c]+ "</p>")
}

for ( let d = 0 ; d < fruites.length ; d++){
    
    document.write("<p>" +"Element at index " + d + " is " + fruites[d] +  "</p>")
}

// Question 6 (1)

for( let e = 1 ; e <= 15 ; e++){

    document.write("<p>" + e + "</p>")
}

// Question 6 (2)

for( let f = 10 ; f >= 1 ; f--){

    document.write("<p>" + f + "</p>")
}
// Question 6 (3)

let p = 0

for( let g = 1 ; g <= 11 ; g++){
    document.write("<p>" + p  + "</p>")
    p  = p + 2
}

// Question 6 (4)

let q = 1
for( let h = 1 ; h <= 10 ; h++){
    
    document.write("<p>" + q  + "</p>")
    q  = q + 2
}

// Question 6 (5)

let r = 2
for( let j = 1 ; j <= 10; j++){
 
    document.write("<p>" + r  +"k" +"</p>")
    r  = r + 2
}
// Question 7

let food = ["cake" , "chips" , "patties" , "cookie"]

let myfood = prompt("enter food name ")

let flagg = false
for ( let o = 0 ; o < food.length ; o ++ ){

    if ( myfood === food[o]){
        
          document.write("<p>" + food[o] +" is found at " + o +"</p>")
          flagg= true
    }
}
if(!flagg){
    document.write("<p>" + "you food in not in our list" +  "</P>")
}


// Question 8

let A = [24, 53, 78, 91, 12]

let greater = A[0]

for ( let nn = 0 ; nn < A.length ; nn ++){
    if ( A[nn] > greater){
        greater = A[nn]
    }
}

document.write("<p>" + "greater number is " + greater +  "</P>")

// Question 9

let smaller = A[0]

for ( let nn = 0 ; nn < A.length ; nn ++){
    if ( A[nn] < smaller){
        smaller = A[nn]
    }
}

document.write("<p>" + "smaller number is " + smaller +  "</P>")

// Question 10

let ggg = 5
for(let k = 1 ; k <= 20  ; k++){
     
    document.write("<p>" + ggg + "</p>")

    ggg = ggg + 5

}