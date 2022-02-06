

//CAMBIO DE PANTALLAS DEL JUEGO

const cambiaPantalla = (siguiente) => {
    let pantallaDeseada = "screen" + siguiente;
    let arrayPantallas = ["screen1","screen2","screen3","screen4"];
    arrayPantallas = arrayPantallas.filter(Valor => !pantallaDeseada.includes(Valor));
    document.getElementById(pantallaDeseada).style.display = "block";
    for (let pantalla of arrayPantallas){
        document.getElementById(pantalla).style.display = "none";
    }
}


// PANTALLA 2 DEL JUEGO (LA SELECCION DE EQUIPOS)

const seleccionarSoldado = (nSoldado) => {
    if(equipo1 == ""){
        equipo1 = todosSoldados[nSoldado];
        let soldadoPrimero = document.getElementById(nSoldado);
        // let datosSoldado = document.getElementById("data"+ 1);
        //una vez he escogido el soldado, invalido el img para que nadie haga onclick sobre él
        soldadoPrimero.onclick = "";
        soldadoPrimero.classList.add("soldadoSeleccionado");

        // datosSoldado.innerHTML = `${equipo1.fotoSoldado}`;


    } else if (equipo2 == ""){
        equipo2 = todosSoldados[nSoldado];
        let soldadoSegundo = document.getElementById(nSoldado);
        soldadoSegundo.onclick = "";
        soldadoSegundo.classList.add("soldadoSeleccionado");
        //una vez he escogido los dos soldados.........
        setTimeout(()=>{
            cambiaPantalla(3);
            verJuego();
        },500);
    }
}

// PANTALLA 3 DEL JUEGO (LA BATALLA)


const verJuego = () => {
    // console.log(equipo1,equipo2,"el ganador es....",ganador);
    verEquipo1.innerHTML = `<img class="foto" style="width:15em;height:25em" src="img/${equipo1.fotoSoldado}.jpg" alt="primer_soldado"/>`;
    estEquipo1.innerHTML = `<div>NOMBRE${equipo1.nombre}<br>EDAD${equipo1.edad}<br>ATAQUE${equipo1.ataque}<br>DEFENSA${equipo1.defensa}<br>${equipo1.vida}</div>`;
    verEquipo2.innerHTML = `<img class="foto" style="width:15;height:25em" src="img/${equipo2.fotoSoldado}.jpg" alt"segundo_soldado"/>`;
    estEquipo2.innerHTML = `<div>NOMBRE${equipo2.nombre}<br>EDAD${equipo2.edad}<br>ATAQUE${equipo2.ataque}<br>DEFENSA${equipo1.defensa}<br>${equipo1.vida}</div>`;
}






const jugar = () => {
    if((equipo1.vida >= vida_soldado) || (equipo2.vida >= vida_soldado)){

        ganador = equipo1;

        cambiaPantalla(4);

        winner.innerHTML = `<img class="foto" style="width:15;height:25em" src="img/${equipo1.fotoSoldado}.jpg" alt"primer_soldado"/>`;
        estGanador.innerHTML = `<div>NOMBRE${equipo1.nombre}<br>EDAD${equipo1.edad}<br>ATAQUE${equipo1.ataque}<br>DEFENSA${equipo1.defensa}`;
    }

    equipo1.atacar();

    equipo2.atacar();

    console.log(vida1.innerHTML = `<p>${equipo1.vida}</p>`);
    console.log(vida2.innerHTML = `<p>${equipo2.vida}</p>`);

}







let verEquipo1 = document.getElementById("verSoldado1");
let verEquipo2 = document.getElementById("verSoldado2");
let estEquipo1 = document.getElementById("est1");
let estEquipo2 = document.getElementById("est2");
let vidaEquipo1 = document.getElementById("vida1");
let vidaEquipo2 = document.getElementById("vida2");
let winner = document.getElementById("winner");




function resetearJuego(){
    equipo1 = "";
    equipo2 = "";
    ganador = "";
    cambiaPantalla(1);
    document.getElementById("volver").style.display = "none";
}

