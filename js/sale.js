const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];
let purchasesflitre = [];

function add() {

  let currentCoffe = priceElement.options[priceElement.selectedIndex].text
  let currentPrice = priceElement.options[priceElement.selectedIndex].value;

  if (currentPrice == 0 || numberElement.value == "") {
    alert("Choix votre Cafe et la quantite")
  }
  else {
    let purchase = {
      name: currentCoffe,
      price: currentPrice,
      number: parseInt(numberElement.value),

    };
    const newPurchase = purchases.findIndex((item) => item.price === purchase.price) // --1
    if (purchases.length < 1 || newPurchase === -1) { //--2
      purchases.push(purchase);
    } else {
      purchases[newPurchase].number += purchase.number; //--3
    }
    window.alert("\t\t\t\ COFFES \t\t\t\n"+
      purchase.name + ", " + purchase.number + " items \n \n "+"\t\tAjouté avec succès");

  }


  console.log(purchases);

}




function calc() {
  if (purchases.length === 0) {

    alert("Ajouter des cafes ....")
  } else {

    let sum = 0;
    let postage;
    let text = "\t\t\t\ COFFES \t\t\t\n";
    for (let i = 0; i < purchases.length; i++) {

      sum += purchases[i].price * purchases[i].number;
      text += purchases[i].name + ", " + purchases[i].number + " items \n";
    }
    console.log(text)
    if (sum < 2000) {
      postage = 500;
    } else if (sum >= 2000) {
      postage = 250;
    } else if (sum >= 3000) {
      postage = 0;
    }
    let x = sum + postage;
    console.log(text)
    const result = "Montant est : " + sum + " yens frais est :" + postage + " yens \nLe montant total est " + x + " yens";
    window.alert(text + "\n \n" + result);
    purchases = [];
    priceElement.value = "";
    numberElement.value = "";
  }
}