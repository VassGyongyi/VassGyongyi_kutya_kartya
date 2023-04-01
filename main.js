import { kutyaLista } from "./adat.js";
import {
  osszeallit,
  tablazatOsszeallit,
  urlapOsszeallit,
} from "./adatkezeles.js";
import { rendezBarmiSzerint } from "./rendezesSzures.js";
window.addEventListener("load", init);


let ART = $("article");
function init() {
  rendezBarmiSzerint(kutyaLista, kutyaLista.kor, -1);
  oldal();
}
function oldal() {
  
  //let txt = osszeallit(kutyaLista);
  ART.html(osszeallit(kutyaLista));
  ART.append(tablazatOsszeallit(kutyaLista));
  ART.append(urlapOsszeallit(kutyaLista));
  const GOMB = $("article div.carts button");
  GOMB.on("click", egerEsemeny);

  const SUBMIT = $("#hozza");
  SUBMIT.on("click", ujKutya);
}
//gomb elemre kattintva a szülő objektumot letörli
function egerEsemeny(event) {
  const GOMB = $(event.target);
  let index = GOMB.attr("data-id");
  GOMB.parent().remove();
  //kitörli a táblázat sorát is
  kutyaLista.splice(index, 1);
  let tablazat = $("article table");
  tablazat.html(tablazatOsszeallit(kutyaLista));
}

function ujKutya(event) {
  console.log(kutyaLista);
  //event.preventDefault();
  const kutya = {};
  let szuka = $("#szuka");
  let kan = $("#kan");
 
  //szedd össze az űrlap adatait,
  //tegyük bele egy objektumba
  //fűzzük hozzá a KUTYALISTA listához

  const NevInputElem = $("#knev");
  NevInputElem.val(kutya.név);

  const KorInputElem = $("#kor");
  KorInputElem.val(kutya.kor);

  const FajtaInputElem = $("#fajta");
  FajtaInputElem.val(kutya.fajta);

  const MmagInputElem = $("#magas");
  MmagInputElem.val(kutya.marmagasság);

  const NemInputElem = $("#szuka");
  if (NemInputElem.checked) {
    kutya.neme = "szuka";
  } else {
    kutya.neme = "kan";
  }
  kutyaLista.push(kutya);
  console.log(kutyaLista);
  //let urlap = $("article form");
  //urlap.html(urlapOsszeallit(kutyaLista));
  oldal()
}
