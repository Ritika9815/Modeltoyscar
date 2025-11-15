/* 
Name: Ritika Ritika
Date: 15 November 2025
Description:
This script creates a ToyCar constructor following the style used in class.
It includes 10–15 properties, a describe() method, and interaction to change color.
It then outputs the car details to the web page.
*/
// STEP 1: Get references to HTML elements
const carDisplay = document.getElementById('carDisplay');
const changeColorBtn = document.getElementById('changeColorBtn');

/*
    STEP 2: Create a constructor function for ToyCar.
    This function defines all the properties that describe a toy car.
    Using 'this' allows each new object to have its own independent properties.
*/
function ToyCar(
    name,
    scale,
    manufacturer,
    color,
    year,
    material,
    weight,
    price,
    length,
    width,
    height,
    doorsOpen,
    wheelsTurn,
    inStock
) {
    this.name = name;
    this.scale = scale;
    this.manufacturer = manufacturer;
    this.color = color;
    this.year = year;
    this.material = material;
    this.weight = weight;
    this.price = price;
    this.length = length;
    this.width = width;
    this.height = height;
    this.doorsOpen = doorsOpen;
    this.wheelsTurn = wheelsTurn;
    this.inStock = inStock;
}
/*
    STEP 3: Add a describe() method to ToyCar prototype.
    This method returns a formatted string describing all properties of the car.
    Using prototype saves memory because all objects share the same function.
*/
ToyCar.prototype.describe = function() {
    return `
        <img src=images/mustang.jpg"" alt="${this.name}">
        <h2>${this.name}</h2>
        <p>Scale: ${this.scale}</p>
        <p>Manufacturer: ${this.manufacturer}</p>
        <p>Year: ${this.year}</p>
        <p>Material: ${this.material}</p>
        <p>Weight: ${this.weight} grams</p>
        <p>Dimensions: ${this.length} x ${this.width} x ${this.height} cm</p>
        <p>Color: ${this.color}</p>
        <p>Price: $${this.price}</p>
        <p>Doors Open: ${this.doorsOpen}</p>
        <p>Working Wheels: ${this.wheelsTurn}</p>
        <p>Available in Stock: ${this.inStock}</p>
    `;
};

/*
    STEP 4: Create an instance of ToyCar for the Mustang GT.
    This object represents the real product chosen from ModelToyCars.com
*/
const mustang = new ToyCar(
    "1967 Ford Mustang GT",
    "1:24",
    "Welly",
    "Red",
    1967,
    "Die-cast Metal",
    350,
    39.99,
    19,
    7,
    5,
    true,
    true,
    true
);

/*
    STEP 5: Function to display the car object on the webpage.
    The innerHTML of carDisplay is replaced with the formatted description.
*/
function displayCar(carObj) {
    carDisplay.innerHTML = carObj.describe();
}
/*
    STEP 6: Add interactivity to change the car color.
    The user enters a new color, and the display updates dynamically.
*/
changeColorBtn.addEventListener("click", function() {
    const newColor = prompt("Enter a new color for the car:");
    if(newColor) {
        mustang.color = newColor;
        displayCar(mustang);
    }
});

/*
    STEP 7: Display the car when the page first loads.
*/
displayCar(mustang);


