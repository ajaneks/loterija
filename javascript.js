const vardi = ["Valdis Zatlers", "Lauris Reiniks", "Martins Krumins", "Imants Ziedonis", "Intars Busulis", "Uzumaki Naruto"];
const balvas = ["3m virve no Ksenukai", "Dainu skapis", "e-talons", "0.5l limpo", "datorpele"];
const naudaKopa = 1000000;
let uzvaretajuSkaits = 4;

let rindas = document.querySelector('.rindas');
//Math.random=Math.random()*10;

function randFunc(maxCipars) {
  let random1=Math.floor(Math.random()*maxCipars);
  return random1;
}

function Izlozet() {
rindas.innerHTML=""; //lai katru reizi izdzes

for (let i = 0; i < uzvaretajuSkaits; i++) {
  let rand=randFunc(vardi.length);
  //  let rand = Math.random() * vardi.length;
  //  rand = Math.floor(rand);
  //  console.log(vardi[rand]);

    let uzvaretajs = vardi[rand];


    rindas.innerHTML += `
 <tr>
  <td>${i + 1}</td>
  <td>${uzvaretajs}</td>
</tr>`

}
}


