//complete this code
class Animal {
	constructor(species){
		this._species = species;
	}
	get species(){
		return this._species
	}
	makesound(){
		 console.log(`The ${this.species} makes a sound`)
	}
}

class Dog extends Animal {
	bark(){
console.log("woof")
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr")
	}
}

const myCat = new Cat("siamese");
myCat.makesound();
myCat.purr();

const myDog = new Dog("golden retriever");
myDog.makesound();
myDog.bark();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
