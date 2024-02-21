import { szamlalas } from "./fuggvenyek.js";
//console.log(szamlalas(5));
/* var let const -hat
var = glob/*/
let szam = 12;

function fv1() {
  let szam = 5;
  //console.log(szam);
  let masikSzam = 21;
  //console.log(masikSzam);
}
//console.log(szam);
fv1();
function fv2() {
  let x = 2;
  {
    let x = 3;
    console.log(x);
  }
  console.log(x);
}
//fv2();
function fv3() {
  for (let index = 0; index < 3; index++) {
    console.log(index);
  }
  //console.log(index);
}
fv3();

function fv4(szam) {
  let szoveg;

  szam % 3 === 0
    ? (szoveg = "nulla")
    : szam % 3 === 1
    ? (szoveg = "egy")
    : (szoveg = "kettő");

  console.log(szoveg);
}
fv4(5);

function fv5(szam) {
  let szoveg;
  szam % 5 === 0 ? (szoveg = "nulla"): szam % 5 === 1? (szoveg = "egy"):szam % 5 === 2 (szoveg = "kettő");
  console.log(szoveg);
}
fv5(9);
