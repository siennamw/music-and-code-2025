// initialize a variable with an object as its value;
// include these properties in your object: color, breed, age, name, barks

const dog = {
    color: 'brown',
    breed: 'retriever',
    barks: false,
    age: 10,
    name: 'Rover',
};


// write a for...in loop to iterate over your object's properties and console log the value of each

for (const p in dog) {
    if (p === 'color') continue;
    console.log(dog[p]);
}


// update your loop so that it skips (does not console log) the color property



// run this program with node from your terminal