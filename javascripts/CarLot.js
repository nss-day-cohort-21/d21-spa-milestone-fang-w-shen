// This IIFE will add a new module to Carlot in the
// namespace of CarLot.Inventory
var CarLot = (function (globalScopeCarLot) {

  // Define a private scope variable to store cars
  let _car_inventory = [];  

  // Start building the Object that will be attached
  // to the CarLot.Inventory namespace
  var inventory = Object.create(null);
  inventory.loadInventory= function () {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET","inventory.json");
      inventoryLoader.send();
      inventoryLoader.addEventListener("load", function () {
        // Add each car to the private _car_inventory array
        var carlist = JSON.parse(inventoryLoader.responseText);

        console.log("", carlist);

        console.log("", 1);
        return carlist;
        });
      Inventory.loadInventory();
    }


  
  console.log("", inventory);
    
  globalScopeCarLot.Inventory = inventory;
  return globalScopeCarLot;

  // If this is the first module that gets evaluated,
  // CarLot will be `undefined` and a new empty object
  // will augmented.
})(CarLot || {});