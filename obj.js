window.addEventListener("load", init);
const KUTYAK = [
  {
    nev: "Dézi",
    fajta: "keverék",
    lab: 4,
    marmagassag: 52,
    neme: "szuka",
    kor: 13,
  },
  {
    nev: "Kira",
    fajta: "terrier",
    lab: 4,
    marmagassag: 20,
    neme: "szuka",
    kor: 13,
  },
];
console.log(KUTYAK)
function init() {
  //kulcs-érték párok
 
  console.log(KUTYAK[0]);
  console.log(KUTYAK[0].nev);
  KUTYAK[0].nev = "Béla";
  console.log(KUTYAK[0].nev);
  KUTYAK[0].oltas = "van";
  delete KUTYAK[0].lab;
  console.log(KUTYAK[0]);

  //összes bejárása
  for (const key in KUTYAK[0]) {
    console.log(key, KUTYAK[0][key]);
  }
  for (let index = 0; index < KUTYAK.length; index++) {
    console.log(index, ".kutya************")
    for (const key in KUTYAK[index]) {
        console.log(key,KUTYAK[index][key]);
        }
    }
    
  }

