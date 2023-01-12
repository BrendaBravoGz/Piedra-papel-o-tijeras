var juego = document.getElementById("container-game")
var ganador = document.getElementById("container-ganador")
var Objpiedra = document.getElementById("piedra")
var Objpapel = document.getElementById("papel")
var Objtijera = document.getElementById("tijera")
var ObjpiedraPC = document.getElementById("piedraPC")
var ObjpapelPC = document.getElementById("papelPC")
var ObjtijeraPC = document.getElementById("tijeraPC")
var inputStatus = document.getElementById("inputStatusGanador");
var inputScore = document.getElementById("score");
var score = 0
let popupX = document.getElementById("popupX")
let cerrar=document.getElementById("cerrar")

function popupx() {
    popupX.classList.add('active');
    confe.classList.add('active')
}
cerrar.onclick=function(){
    popupX.classList.remove('active')
}

function tijera(){
    let num = Math.floor((Math.random() * (4-1))+1);
    switch (num){
        case 1:
            juego.style.display="none";
            ganador.style.display="flex";
            Objtijera.style.display="flex";
            ObjpiedraPC.style["boxShadow"] =  "0 0 100px 10px #FFFFFF";
            ObjpiedraPC.style.display="flex";
            inputStatus.value = "Perdiste";
            score = score - 1;
            inputScore.value = score
            break
        case 2:
            juego.style.display="none";
            ganador.style.display="flex";
            Objtijera.style.display="flex";
            Objtijera.style["boxShadow"] =  "0 0 100px 10px #FFFFFF";
            ObjpapelPC.style.display="flex";
            inputStatus.value = "Ganaste";
            score = score + 1;
            inputScore.value = score
            break
        case 3:
            console.log("Es Tijera")
            console.log("tijera con tijera es empate")
            juego.style.display="none";
            ganador.style.display="flex";
            Objtijera.style.display="flex";
            ObjtijeraPC.style.display="flex";
            inputStatus.value = "Empate";
            break
    }
}
function piedra(){
    let num = Math.floor((Math.random() * (4-1))+1);
    switch (num){
        case 1:
            juego.style.display="none";
            ganador.style.display="flex";
            Objpiedra.style.display="flex";
            ObjpiedraPC.style.display="flex";
            inputStatus.value = "Empate";
            break
        case 2:
            juego.style.display="none";
            ganador.style.display="flex";
            Objpiedra.style.display="flex";
            ObjpapelPC.style["boxShadow"] =  "0 0 100px 10px #FFFFFF";
            ObjpapelPC.style.display="flex";
            inputStatus.value = "Perdiste";
            score = score - 1;
            inputScore.value = score
            break
        case 3:
            juego.style.display="none";
            ganador.style.display="flex";
            Objpiedra.style.display="flex";
            Objpiedra.style["boxShadow"] =  "0 0 100px 10px #FFFFFF";
            ObjtijeraPC.style.display="flex";
            inputStatus.value = "Ganaste";
            score = score + 1;
            inputScore.value = score
            break
    }
}
function papel(){
    let num = Math.floor((Math.random() * (4-1))+1);
    switch (num){
        case 1:
            juego.style.display="none";
            ganador.style.display="flex";
            Objpapel.style.display="flex";
            Objpapel.style["boxShadow"] =  "0 0 100px 10px #FFFFFF";
            ObjpiedraPC.style.display="flex";
            inputStatus.value = "Ganaste";
            score = score +1;
            inputScore.value = score
            break
        case 2:
            juego.style.display="none";
            ganador.style.display="flex";
            Objpapel.style.display="flex";
            ObjpapelPC.style.display="flex";
            inputStatus.value = "Empate";
            break
        case 3:
            juego.style.display="none";
            ganador.style.display="flex";
            Objpapel.style.display="flex";
            ObjtijeraPC.style.display="flex";
            ObjtijeraPC.style["boxShadow"] = "0 0 100px 10px #FFFFFF";
            inputStatus.value = "Perdiste";
            score = score -1;
            inputScore.value = score
            break
    }
}
function playagain(){
    ganador.style.display="none";
    juego.style.display="flex"
    recargar()
}

function recargar(){
    ObjpiedraPC.style.display="none";
    ObjpapelPC.style.display="none";
    ObjtijeraPC.style.display="none";
    Objpiedra.style.display="none";
    Objpapel.style.display="none";
    Objtijera.style.display="none";
    Objpapel.style["boxShadow"] =  "0 0 0px 0px ";
    Objpiedra.style["boxShadow"] =  "0 0 0px 0px ";
    Objtijera.style["boxShadow"] =  "0 0 0px 0px ";
    ObjpapelPC.style["boxShadow"] =  "0 0 0px 0px ";
    ObjtijeraPC.style["boxShadow"] =  "0 0 0px 0px ";
    ObjpiedraPC.style["boxShadow"] =  "0 0 0px 0px ";
}
