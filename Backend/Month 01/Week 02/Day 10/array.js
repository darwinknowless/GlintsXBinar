let fridge = ["Apple", "Wortel", "Milk", "Orange", "Leech", "Cabbage"];
  
console.log(fridge.includes("Apple")) // true because Apple exist
console.log(fridge.includes("Banana")) // false banana doesnt exist

// Manual case-insensetive
for (var i = 0; i < fridge.length; i++) {
    if (fridge[i].toLowerCase() == "apple") {
        console.log(true);
    }
}