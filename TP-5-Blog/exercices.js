function ex1(){
    let p = prompt("Exercice 1 : enter some text") ; 
    document.getElementById("prompt").textContent = p ;
}
function ex2(){
    let a =2 ;
    let b = 5 ;
    let s = a+b; 
    alert("Exercice 2 : the sum of 2 and 5 is "+s.toString()) ;
}
function ex3(){
    let budget = 1500;
    let achats= 999;
    if(achats<=budget){
        document.getElementById("ex3").textContent = "== Exercice 3 : le budget permet de payer les achats"
    } 
    else 
        document.getElementById("ex3").textContent = "== Exercice 3 : le budget permet de payer les achats"
}

function ex4(){
    let HT ;
    do {
        HT = prompt("Exercice 4 : Entrer votre HT (must be valid)") ; 
    }
    while(HT<=0 || isNaN(HT)) ; 
    let TTC = (parseFloat(HT) * 0.8).toString() ; 
    document.body.innerHTML+= `<div id="ex4">==Exercice 4 : Votre TTC est ${TTC} </div>`;
}

function ex5(){
    let HT,TVA ;
    do {
        HT = prompt("Exercice 5 : Entrer votre HT (must be valid)") ; 
    }
    while(isNaN(HT) || HT<=0 ) ; 

    do {
        TVA = prompt("Entrer votre TVA (must be valid : 0.xx)") 
    }
    while(isNaN(TVA) || TVA>=1 || TVA <= 0) ; 

    let TTC = (parseFloat(HT) * (1-parseFloat(TVA))).toString() ; 
    document.body.innerHTML+=`<div id="ex5">==Exercice 5 : Votre TTC est ${TTC} </div>`;
}

function ex6(){
    let HT,TVA ;
    do {
        HT = prompt("Exercice 6 : Entrer votre HT (must be valid)") ; 
    }
    while(isNaN(HT) || HT<=0 ) ; 

    do {
        TVA = prompt("Entrer votre TVA (must be valid : 0.xx)") 
    }
    while(isNaN(TVA) || TVA>=1 || TVA <= 0) ; 

    let TTC = (parseFloat(HT) * (1-parseFloat(TVA))).toString() ; 
    if(TTC>=100){
        document.body.innerHTML+=`<div id="ex6" style="color: red;">==Exercice 6 : Votre TTC est ${TTC} </div>`;
    }
    else {
        document.body.innerHTML+=`<div id="ex6" style="color: green;">==Exercice 6 : Votre TTC est ${TTC} </div>`;

    }
}

function ex7(){
    let cocktailElement = document.getElementById("cocktail");
    cocktailElement.textContent = "Long Island Iced Tea";
}

const content = ["c++", "python", "assembly", "js", "rust"];

function ex8(){
    const x = 5; 
    const y = 5; 

    let tableHTML = "<table border='1'>";
    for (let i = 0; i < x; i++) {
        tableHTML += "<tr>";
        for (let j = 0; j < y; j++) {
            tableHTML += "<td>" + content[i] + "</td>";
        }
        tableHTML += "</tr>";
    }
    tableHTML += "</table>";

    document.getElementById("ex8").innerHTML += tableHTML;
}

function ex9(){
    let x,y ;
    do {
        x = prompt("Exercice 9 : Entrer le nombre des lignes") ; 
    }
    while(isNaN(x) || x<=0 ) ; 
    do {
        y = prompt("Exercice 9 : Entrer le nombre des colones") ; 
    }
    while(isNaN(y) || y<=0 ) ; 
    x = parseInt(x) ;
    y = parseInt(y) ;

    let tableHTML = "<table border='1'>";
    for (let i = 0; i < x; i++) {
        tableHTML += "<tr>";
        for (let j = 0; j < y; j++) {
            if(i<content.length)
                tableHTML += "<td>" + content[i] + "</td>";
            else 
                tableHTML += "<td>" + content[i%content.length] + "</td>";
          
        }
        tableHTML += "</tr>";
    }
    tableHTML += "</table>";

    document.getElementById("ex9").innerHTML += tableHTML;
}

function ex10(){
    let d= document.getElementById("ex10");
    let html =`<ul>`;
    let n =10;
    for(let i=0;i<n;i++){
        html+=`<li>${Math.floor(Math.random() * 100)} </li>` ;
    }
    html +=`</ul>` ;
    d.innerHTML=html;
}


function ex11(){
    let r = Math.floor(Math.random() * 255) ; 
    let g = Math.floor(Math.random() * 255) ; 
    let b = Math.floor(Math.random() * 255) ;
    document.body.style.background = `rgb(${r},${g},${b})` ; 
}

function ex12(){
    const n = 12;
    document.getElementById("imgs").innerHTML = '';
    for (let i = 0; i < n; i++) {
        let id = Math.floor(Math.random() * 100) ;

        let url = `https://picsum.photos/id/${id}/350/350`;
        document.getElementById("imgs").innerHTML+=`<img src=${url}>`;
    }
}