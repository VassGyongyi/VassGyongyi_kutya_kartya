 export function osszeallit(lista) {
    //összeállítjuk azt a szöveges tartalmat, ami a HTML kódot jelenti
    let txt = "<div class=carts>";
    for (let index = 0; index < lista.length; index++) {
      txt += `<div class=cart><button data-id="${index}">Törlés</button>`;
      for (const key in lista[index]) {
        txt += `<p>${key} : ${(key, lista[index][key])}</p>`;
      }
      txt += "</div>";
    }
    txt += "</div>";
    return txt;
  }

  export function tablazatOsszeallit(lista) {
    let txt2 =
      "<div class=tabla><table><tr><th>Név</th><th>Fajta</th><th>Marmagasság</th><th>Neme</th><th>Kor</th></tr>";
    for (let index = 0; index < lista.length; index++) {
      txt2 += "<tr>";
      for (const key in lista[index]) {
        txt2 += `<td>${lista[index][key]}</td>`;
      }
      txt2 += "</tr>";
    }
    txt2 += "</table></div>";
    return txt2;
  }
  export function urlapOsszeallit(lista) {
    let txt3 = `<form><label for="knev">Kutya neve:</label><br>
    <input type="text" id="knev" name="knev"><br>
    <label for="fajta">Fajtája:</label><br>
    <input type="text" id="fajta" name="fajta"><br>
    <label for="magas">Marmagassága:</label><br>
    <input type="text" id="magas" name="magas"><br>
    <label for="kor">Kora:</label><br>
    <input type="text" id="kor" name="kor" class=korInput><br>
    <div>
    <label for="szuka" class=radioLabel>szuka</label>
    <input type="radio" id="szuka" name="neme" value="szuka" class=radioInput cheked>
    <label for="kan" class=radioLabel>kan</label>
    <input type="radio" id="kan" name="neme" value="kan" class=radioInput>
    </div>
    <button id="hozza">Hozzáad</button>
  </form>`;
  
    return txt3;
  }