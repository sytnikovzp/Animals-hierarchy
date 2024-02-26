class Animals {
  static maxAge;
  static maxWeight;

  static isAnimal(obj) {
    return obj instanceof this;
  }

  constructor(type, age, name, weight, limbAmount, maxAge, maxWeight) {
    this.type = type;
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.limbAmount = limbAmount;
    this.maxAge = maxAge;
    this.maxWeight = maxWeight;
  }

  move() {
    console.log(`${this.constructor.name} just moving anywhere like animals`);
  }

  say() {
    console.log(`${this.constructor.name} can just talk like animals`);
  }

  eat() {
    console.log(`${this.constructor.name} can just eat like animals`);
  }
}

class Mammals extends Animals {
  static maxAge;
  static maxWeight;

  static isMammal(obj) {
    return obj instanceof this;
  }

  constructor(type, age, name, weight, limbAmount, maxAge, maxWeight) {
    super(type);
    this.type = type;
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.limbAmount = limbAmount;
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

  constructor(type, age, name, weight, limbAmount, maxAge, maxWeight) {
    super(type);
    this.type = type;
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.limbAmount = limbAmount;
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

  constructor(type, age, name, weight, limbAmount, maxAge, maxWeight) {
    super(type);
    this.type = type;
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.limbAmount = limbAmount;
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

  constructor(type, age, name, weight, limbAmount, maxAge, maxWeight) {
    super(type);
    this.type = type;
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.limbAmount = limbAmount;
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

  constructor(type, age, name, weight, limbAmount, maxAge, maxWeight) {
    super(type);
    this.type = type;
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.limbAmount = limbAmount;
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

  constructor(type, age, name, weight, limbAmount, maxAge, maxWeight) {
    super(type);
    this.type = type;
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.limbAmount = limbAmount;
    this.maxAge = maxAge;
    this.maxWeight = maxWeight;
  }
}

class Dog extends Predators {
  static isDog(obj) {
    return obj instanceof this;
  }

  constructor(type) {
    super(type);
    this.type = type;
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

  constructor(type, age, name, weight, limbAmount, maxAge, maxWeight) {
    super(type);
    this.type = type;
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.limbAmount = limbAmount;
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

  constructor(type, age, name, weight, limbAmount, maxAge, maxWeight) {
    super(type);
    this.type = type;
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.limbAmount = limbAmount;
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

const animal1 = new Animals('random animal 1',10,'randAnimalName 1',30,4,20,50);
const animal2 = new Animals('random animal 2',15,'randAnimalName 2',25,2,30,60);

// constructor(type, age, name, weight, limbAmount, maxAge, maxWeight)

const mammal1 = new Mammals('fox', 5, 'FoxName', 12, 4, 25, 10);
const mammal2 = new Mammals('wolf', 7, 'WolfName', 17, 4, 10, 110);

const bird1 = new Birds('pigeon', 2, 'pigeonName' );
const bird2 = new Birds();

const fish1 = new Fish();
const fish2 = new Fish();

const predator1 = new Predators();
const predator2 = new Predators();

const whale1 = new Whales();
const whale2 = new Whales();

const primate1 = new Primates();
const primate2 = new Primates();

const dog1 = new Dog();
const dog2 = new Dog();

const dolphin1 = new Dolphin();
const dolphin2 = new Dolphin();

const human1 = new Human();
const human2 = new Human();

// ----------------------------- Testings -----------------------------------

console.log(animal1);

console.log('--------------------------');
