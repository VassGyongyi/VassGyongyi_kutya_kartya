window.addEventListener("load", init);
// const kutyaLista = [
//   "foxterrier",
//   "kuvasz",
//   "puli",
//   "agár",
//   "újfullandi",
//   "keverék",
// ];
let kutyaLista = [
  {
    név: "Dézi",
    fajta: "foxterrier",
    marmagasság: 52,
    neme: "szuka",
    kor: 13,
  },
  {
    név: "Kira",
    fajta: "terrier",
    marmagasság: 20,
    neme: "szuka",
    kor: 13,
  },
  {
    név: "Foltos",
    fajta: "kuvasz",
    marmagasság: 40,
    neme: "kan",
    kor: 13,
  },
  {
    név: "Pötyi",
    fajta: "újfullandi",
    marmagasság: 50,
    neme: "kan",
    kor: 6,
  },
];
function init() {
  const ART = document.querySelector("article");
  let txt = osszeallit();
  ART.innerHTML += txt;
  ART.innerHTML += tablazatOsszeallit();
  ART.innerHTML += urlapOsszeallit();
  const GOMB = document.querySelectorAll("article div button");
  for (let i = 0; i < GOMB.length; i++) {
    GOMB[i].addEventListener("click", function () {
      egerEsemeny(event, i);
    });
  }
}

function osszeallit() {
  //összeállítjuk azt a szöveges tartalmat, ami a HTML kódot jelenti
  let txt = "<div class=carts>";
  for (let index = 0; index < kutyaLista.length; index++) {
    txt += "<div class=cart><button>Törlés</button>";
    for (const key in kutyaLista[index]) {
      txt += `<p>${key} : ${(key, kutyaLista[index][key])}</p>`;
    }
    txt += "</div>";
  }
  txt += "</div>";
  return txt;
}

//gomb elemre kattintva a szülő objektumot letörli
function egerEsemeny(event, i) {
  const GOMB = event.target;
  GOMB.parentElement.remove();
  //kitörli a táblázat sorát is
  delete kutyaLista[i];
  let tablazat = document.querySelector("article table");
  tablazat.innerHTML = tablazatOsszeallit();
}

function tablazatOsszeallit() {
  let txt2 =
    "<div class=tabla><table><tr><th>Név</th><th>Fajta</th><th>Marmagasság</th><th>Neme</th><th>Kor</th></tr>";
  for (let index = 0; index < kutyaLista.length; index++) {
    txt2 += "<tr>";
    for (const key in kutyaLista[index]) {
      txt2 += `<td>${kutyaLista[index][key]}</td>`;
    }
    txt2 += "</tr>";
  }
  txt2 += "</table></div>";
  return txt2;
}
function urlapOsszeallit() {
  let txt3 = `<div><form><label for="knev">Kutya neve:</label><br>
  <input type="text" id="knev" name="knev"><br>
  <label for="fajta">Fajtája:</label><br>
  <input type="text" id="fajta" name="fajta"><br>
  <label for="magas">Marmagassága:</label><br>
  <input type="text" id="magas" name="magas"><br>
  <label for="kor">Kora:</label><br>
  <input type="text" id="kor" name="kor" class=korInput><br>
  <div>
  <label for="szuka" class=radioLabel>szuka</label>
  <input type="radio" id="szuka" name="neme" value="szuka" class=radioInput>
  <label for="kan" class=radioLabel>kan</label>
  <input type="radio" id="kan" name="neme" value="kan" class=radioInput>
  </div>
  <input type="submit" value="Hozzáad" id=hozza>
</form>`;

  return txt3;
}

