// array / lists
const cars = ["Toyota", "Ford", "Toyota"];

// objects
const person = {
    firstname: "Jaxson",
    lastname: "Brown"
};

// set
const newArray = [9, 45, 12, 45, 73, 1];
const newSet = new Set(newArray);
console.log(newArray);
console.log(newSet);

// maps
const newMap = new Map();
newMap.set("age", 21);
newMap.set("name", "Jaxson");
console.log(newMap.get("name"));

//cars.map((item) => {console.log(item)});