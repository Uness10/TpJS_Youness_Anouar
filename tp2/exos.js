
function add(){
    let  x = parseInt(document.getElementById("x").value) ;
    let  y = parseInt(document.getElementById("y").value) ;
    let sum= x+y ;
    document.getElementById("somme").textContent = " = "+ sum  ; 
}

function swap(){
    let  x = document.getElementById("s1").value ;
    let  y = document.getElementById("s2").value ;
    document.getElementById("s1").value = y ;
    document.getElementById("s2").value = x ;
}

function calculer(){
    let  x = parseInt(document.getElementById("op1").value) ;
    let  y = parseInt(document.getElementById("op2").value) ;
    let op = document.getElementById("ops").selectedIndex ;
    console.log(op);
    if(op===0)
        alert("Choisir une operation");
    if(op===1 && !isNaN(x) && !isNaN(y))
        x= x+y
        document.getElementById("result").textContent = " = "+ x  ; 
    if(op===2 && !isNaN(x) && !isNaN(y))
        x-=y
        document.getElementById("result").textContent = " = "+ x  ; 
    if(op===3 && !isNaN(x) && !isNaN(y))
        x*=y
        document.getElementById("result").textContent = " = "+ x  ; 
    if(op===4 && !isNaN(x) && !isNaN(y))
        x/=y
        document.getElementById("result").textContent = " = "+ x  ; 
}

function ex4(){
    let x,y,z; 
    do {
        x= parseFloat(prompt("premier variable"));
    }
    while(isNaN(x)) ; 
    do {
        y= parseFloat(prompt("deuxieme variable"));
    }
    while(isNaN(x)) ; 
    do {
        z= parseFloat(prompt("troisieme variable"));
    }
    while(isNaN(x)) ; 

    if(x===y && y===z) 
        document.getElementById("res").textContent ="Les trois variables sont identiques.";
    else if(x===y || y===z || z===x)
        document.getElementById("res").textContent ="Deux des variables sont de valeurs égales";
    else 
        document.getElementById("res").textContent ="Les trois variables sont différentes.";

}

function ex5(){
    let HT,TVA ;
    do {
        HT = prompt("Entrer votre HT (must be valid)") ; 
    }
    while(isNaN(HT) || HT<=0 ) ; 

    do {
        TVA = prompt("Entrer votre TVA (must be valid : 0.xx)") 
    }
    while(isNaN(TVA) || TVA>=1 || TVA <= 0) ; 
    let TTC = (parseFloat(HT) * (1-parseFloat(TVA))).toString() ; 
    document.getElementById("ress").textContent =`Votre TTC est ${TTC}`;

}

// ex6 : 
document.getElementById("formMain").addEventListener("submit", function(event) {
    event.preventDefault(); 
    send();
});

function send() {
    let sender = document.getElementById("emailIn").value;
    let object = document.getElementById("objetIn").value;
    let corps = document.getElementById("corpsIn").value;

    document.getElementById("senderOutput").textContent = "Sender : " + sender;
    document.getElementById("objetOutput").textContent = "Objet : " + object;
    document.getElementById("corpsOutput").textContent = "Corps : " + corps;
}

// ex 7 : 
document.getElementById("lnk").addEventListener("click", function(event) {
    event.preventDefault(); 
    alert("Redirection interdite ");
});

let obj = document.getElementById("menu");
let click = false;

// Click event listener
obj.addEventListener("click", function(event) {
    if (!click) {
        let menu = document.createElement("ul");
        for (let i = 0; i < 4; i++) {
            let m = document.createElement("li");
            m.className = "child";
            m.textContent = "Item " + (i + 1);
            menu.appendChild(m);
        }
        event.target.appendChild(menu);
        click = true;
    }
});

// Mouseout event listener
obj.addEventListener("mouseout", function(event) {

    let menu = document.getElementById("menu");
    if (menu) {
        let children = menu.getElementsByClassName("child");
        for (let i = children.length - 1; i >= 0; i--) {
            children[i].remove();
        }
        click=false ;
    }
    
});
