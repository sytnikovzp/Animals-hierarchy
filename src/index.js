class Animals {
  static maxAge;
  static maxWeight;

  static isAnimal(obj) {
    return obj instanceof this;
  }

  constructor(age, name, weight, limbAmount, maxAge, maxWeight) {
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.limbAmount = limbAmount;
    this.maxAge = maxAge;
    this.maxWeight = maxWeight;
  }

  move() {
    console.log(`${this.name} just moving anywhere like ${this.constructor.name}`);
  }

  say() {
    console.log(`${this.name} can just talk like ${this.constructor.name}`);
  }

  eat() {
    console.log(`${this.name} can just eat like ${this.constructor.name}`);
  }
}

class Mammals extends Animals {
  static maxAge;
  static maxWeight;

  static isMammal(obj) {
    return obj instanceof this;
  }

  constructor(age, name, weight, limbAmount, maxAge, maxWeight) {
    super(age, name, weight, limbAmount, maxAge, maxWeight);
    this.maxAge = maxAge;
    this.maxWeight = maxWeight;
  }
}

class Birds extends Animals {
  static maxAge;
  static maxWeight;

  static isBird(obj) {
    return obj instanceof this;
  }

  constructor(age, name, weight, limbAmount, maxAge, maxWeight) {
    super(age, name, weight, limbAmount, maxAge, maxWeight);
    this.maxAge = maxAge;
    this.maxWeight = maxWeight;
  }

  move() {
    console.log(`${this.constructor.name} just moving anywhere like birds`);
  }

  say() {
    console.log(`${this.constructor.name} can just talk like birds`);
  }

  eat() {
    console.log(`${this.constructor.name} can just eat like birds`);
  }
}

class Fish extends Animals {
  static maxAge;
  static maxWeight;

  static isFish(obj) {
    return obj instanceof this;
  }

  constructor(age, name, weight, limbAmount, maxAge, maxWeight) {
    super(age, name, weight, limbAmount, maxAge, maxWeight);
    this.maxAge = maxAge;
    this.maxWeight = maxWeight;
  }

  move() {
    console.log(`${this.constructor.name} just moving anywhere like fish`);
  }

  say() {
    console.log(`${this.constructor.name} can just talk like fish`);
  }

  eat() {
    console.log(`${this.constructor.name} can just eat like fish`);
  }
}

class Predators extends Mammals {
  static maxAge;
  static maxWeight;

  static isPredator(obj) {
    return obj instanceof this;
  }

  constructor(age, name, weight, limbAmount, maxAge, maxWeight) {
    super(age, name, weight, limbAmount, maxAge, maxWeight);
    this.maxAge = maxAge;
    this.maxWeight = maxWeight;
  }
}

class Whales extends Mammals {
  static maxAge;
  static maxWeight;

  static isWhale(obj) {
    return obj instanceof this;
  }

  constructor(age, name, weight, limbAmount, maxAge, maxWeight) {
    super(age, name, weight, limbAmount, maxAge, maxWeight);
    this.maxAge = maxAge;
    this.maxWeight = maxWeight;
  }
}

class Primates extends Mammals {
  static maxAge;
  static maxWeight;

  static isPrimate(obj) {
    return obj instanceof this;
  }

  constructor(age, name, weight, limbAmount, maxAge, maxWeight) {
    super(age, name, weight, limbAmount, maxAge, maxWeight);
    this.maxAge = maxAge;
    this.maxWeight = maxWeight;
  }
}

class Dog extends Predators {
  static isDog(obj) {
    return obj instanceof this;
  }

  constructor(age, name, weight, limbAmount, maxAge, maxWeight) {
    super(age, name, weight, limbAmount, maxAge, maxWeight);
    this.maxAge = maxAge;
    this.maxWeight = maxWeight;
  }

  move() {
    console.log(`${this.constructor.name} just moving anywhere like a dog`);
  }

  say() {
    console.log(`${this.constructor.name} can just talk like dog`);
  }

  eat() {
    console.log(`${this.constructor.name} can just eat like dog`);
  }
}

class Dolphin extends Whales {
  static maxAge;
  static maxWeight;

  static isDolphin(obj) {
    return obj instanceof this;
  }

  constructor(age, name, weight, limbAmount, maxAge, maxWeight) {
    super(age, name, weight, limbAmount, maxAge, maxWeight);
    this.maxAge = maxAge;
    this.maxWeight = maxWeight;
  }

  move() {
    console.log(`${this.constructor.name} just moving anywhere like dolphin`);
  }

  say() {
    console.log(`${this.constructor.name} can just talk like dolphin`);
  }

  eat() {
    console.log(`${this.constructor.name} can just eat like dolphin`);
  }
}

class Human extends Primates {
  static maxAge;
  static maxWeight;

  static isHuman(obj) {
    return obj instanceof this;
  }

  constructor(age, name, weight, limbAmount, maxAge, maxWeight) {
    super(age, name, weight, limbAmount, maxAge, maxWeight);
    this.maxAge = maxAge;
    this.maxWeight = maxWeight;
  }

  move() {
    console.log(`${this.constructor.name} just moving anywhere like human`);
  }

  say() {
    console.log(`${this.constructor.name} can just talk like human`);
  }

  eat() {
    console.log(`${this.constructor.name} can just eat like human`);
  }
}

// ----------------- Create 2 objects of each class ----------------------

const animal1 = new Animals(10,'randAnimalName 1',30,4,20,50);
const animal2 = new Animals(15,'randAnimalName 2',25,2,30,60);

const mammal1 = new Mammals(5, 'Fox', 12, 4, 25, 10);
const mammal2 = new Mammals(7, 'Wolf', 17, 4, 10, 110);

const bird1 = new Birds(2, 'Pigeon', 0.5, 2, 15, 1);
const bird2 = new Birds(1, 'Parrot', 0.4, 2, 10, 0.8);

const fish1 = new Fish(3,'Carp', 2.2, 'none', 5, 7);
const fish2 = new Fish(4,'Herring', 0.8, 'none', 8, 2);

const predator1 = new Predators(10, 'Lion', 50, 4, 20, 150);
const predator2 = new Predators(5, 'Tigen', 40, 4, 25, 180);

const whale1 = new Whales(8, 'Beluga', 70, 'none', 10, 100);
const whale2 = new Whales(4, 'Blue Whale', 250, 'none', 25, 300);

const primate1 = new Primates(6, 'Chimpanzee', 12, 4, 50, 80);
const primate2 = new Primates(9, 'Orangutang', 90, 4, 70, 160);

const dog1 = new Dog(4, 'Terrier', 3, 4, 18, 8);
const dog2 = new Dog(5, 'Labrador', 15, 4, 25, 30);

const dolphin1 = new Dolphin(20, 'Striped dolphin', 70, 'none', 60, 140);
const dolphin2 = new Dolphin(25, 'Spotted dolphin', 75, 'none', 65, 155);

const human1 = new Human(30, 'Alex', 85, 4, 110, 150);
const human2 = new Human(31, 'Nadia', 54, 4, 110, 120);

// ----------------------------- Testings -----------------------------------

console.log(animal1);
animal1.name;
animal1.age;
animal1.weight
animal1.eat;
animal1.limbAmount;
animal1.maxAge;
animal1.move;
animal1.say;

console.log('--------------------------');
