import {kutyaLista} from "./adat.js";
import {osszeallit, tablazatOsszeallit, urlapOsszeallit} from "./adatkezeles.js";
import { rendezBarmiSzerint } from "./rendezesSzures.js";
window.addEventListener("load", init);

let ART;

function init() {
  rendezBarmiSzerint(kutyaLista,kutyaLista.kor, -1);
  ART = document.querySelector("article");
  //let txt = osszeallit(kutyaLista);
  ART.innerHTML = osszeallit(kutyaLista);
  ART.innerHTML += tablazatOsszeallit(kutyaLista);
  ART.innerHTML += urlapOsszeallit();
  const GOMB = document.querySelectorAll("article div button");
  for (let i = 0; i < GOMB.length; i++) {
    GOMB[i].addEventListener("click", function () {
      egerEsemeny(event, i);
    });
  }
  const SUBMIT = document.querySelector("#hozza");
  SUBMIT.addEventListener("click", ujKutya);
}


//gomb elemre kattintva a szülő objektumot letörli
function egerEsemeny(event, i) {
  const GOMB = event.target;
  GOMB.parentElement.remove();
  //kitörli a táblázat sorát is
  delete kutyaLista[i];
  let tablazat = document.querySelector("article table");
  tablazat.innerHTML = tablazatOsszeallit(kutyaLista);
}

function ujKutya() {
  console.log(kutyaLista)
  event.preventDefault();
  const kutya = {};
  let szuka = document.querySelector("#szuka");
  let kan = document.querySelector("#kan");
  const ADAT = document.querySelectorAll("input");

  //szedd össze az űrlap adatait,
  //tegyük bele egy objektumba
  //fűzzük hozzá a KUTYALISTA listához

  const NevInputElem = document.querySelector("#knev");
  kutya.név = NevInputElem.value;

  const KorInputElem = document.querySelector("#kor");
  kutya.kor = KorInputElem.value;

  const FajtaInputElem = document.querySelector("#fajta");
  kutya.fajta = FajtaInputElem.value;

  const MmagInputElem = document.querySelector("#magas");
  kutya.marmagasság = MmagInputElem.value;

  const NemInputElem = document.querySelector("#szuka");
  if (NemInputElem.checked){
    kutya.neme="szuka";
  }
  else{
    kutya.neme="kan";
  }
  kutyaLista.push(kutya);
init()
}
