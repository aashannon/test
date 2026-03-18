class Animal {
    constructor (legs, classification, diet) {
        this.legs = legs;
        this.classification = classification;
        this.diet = diet;
    }

    eat() {
        console.log(`This ${this.classification} eats ${this.diet}.`);
    }
}

const fish = new Animal(0, "fish", "plankton")
fish.eat();

const cat = new Animal(4, 'mammal', 'meat');
cat.eat();

const spider = new Animal(8, 'arachnid', 'insects');
spider.eat();



const car = {
    make: 'Ford',
    model: 'Maverick',
    year: 2024,
    start(){
        console.log(`The ${this.make} ${this.model} is starting.`);
    }
}

car.start();