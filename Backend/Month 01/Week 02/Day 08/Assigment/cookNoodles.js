// isi lemari
let lemari =  ["Sayur", "Buah", "Mie", "Daging", "Ikan","Telur"];

// fungsi buat cari mie
function goToLemari() {
    console.log("Go to Lemari!");
  }

  function checkMieAvailability() {
    console.log("Check mie.....");
  
    if (!lemari.includes("Mie")) {
      console.log("The mie does not exist!");
      buyTheMie();
    } else {
      console.log("The mie exists!");
    }
  }

  function buyTheMie() {
    console.log("Go to market....");
    console.log("Buy the mie!");
  }


function prepareThePot() {
    console.log("Prepare the Pot!");
    console.log("Pour the Water!");
    console.log("Lit up the stove");
    console.log("Wait until the water boiling");
  }

  function cookingTheMie() {
    console.log("Put the noodle into boiling water");
    console.log("Add seasoning");
    console.log("wait until noodles is cooked");
  }

  function cookTheMie() {
    goToLemari();
    checkMieAvailability();
    prepareThePot();
    cookingTheMie();
  
    console.log("End!");
  }
  
  cookTheMie();