class Animals {
  static maxAge = 100;
  static maxWeight = 500;

  static isAnimal(obj) {
    return obj instanceof this;
  }

  constructor(age, name, weight, limbAmount) {
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.limbAmount = limbAmount;
  }

  move() {
    console.log(
      `${this.name} just moving anywhere like ${this.constructor.name}`
    );
  }

  say() {
    console.log(`${this.name} can just talk like ${this.constructor.name}`);
  }

  eat() {
    console.log(`${this.name} can just eat like ${this.constructor.name}`);
  }
}

class Mammals extends Animals {
  static maxAge = 120;
  static maxWeight = 200;

  static isMammal(obj) {
    return obj instanceof this;
  }

  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }
}

class Birds extends Animals {
  static maxAge = 5;
  static maxWeight = 10;

  static isBird(obj) {
    return obj instanceof this;
  }

  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  move() {
    console.log(`${this.name} just flies like ${this.constructor.name}`);
  }

  say() {
    console.log(`${this.name} can sings like ${this.constructor.name}`);
  }

  eat() {
    console.log(`${this.name} eat like ${this.constructor.name}`);
  }
}

class Fish extends Animals {
  static maxAge = 7;
  static maxWeight = 10;

  static isFish(obj) {
    return obj instanceof this;
  }

  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  move() {
    console.log(`${this.name} floats like ${this.constructor.name}`);
  }

  say() {
    console.log(`${this.name} silent as ${this.constructor.name}`);
  }

  eat() {
    console.log(`${this.name} eat like ${this.constructor.name}`);
  }
}

class Predators extends Mammals {
  static maxAge = 75;
  static maxWeight = 180;

  static isPredator(obj) {
    return obj instanceof this;
  }

  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }
}

class Whales extends Mammals {
  static maxAge = 60;
  static maxWeight = 200;

  static isWhale(obj) {
    return obj instanceof this;
  }

  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }
}

class Primates extends Mammals {
  static maxAge = 130;
  static maxWeight = 250;

  static isPrimate(obj) {
    return obj instanceof this;
  }

  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }
}

class Dog extends Predators {
  static maxAge = 20;
  static maxWeight = 40;

  static isDog(obj) {
    return obj instanceof this;
  }

  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  move() {
    console.log(`${this.name} runs like ${this.constructor.name}`);
  }

  say() {
    console.log(`${this.name} barks like ${this.constructor.name}`);
  }

  eat() {
    console.log(`${this.name} eat like ${this.constructor.name}`);
  }
}

class Dolphin extends Whales {
  static maxAge = 70;
  static maxWeight = 240;

  static isDolphin(obj) {
    return obj instanceof this;
  }

  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  move() {
    console.log(`${this.name} floats like ${this.constructor.name}`);
  }

  say() {
    console.log(`${this.name} talks like ${this.constructor.name}`);
  }

  eat() {
    console.log(`${this.name} eat like ${this.constructor.name}`);
  }
}

class Human extends Primates {
  static maxAge = 150;
  static maxWeight = 200;

  static isHuman(obj) {
    return obj instanceof this;
  }

  constructor(age, name, weight, limbAmount) {
    super(age, name, weight, limbAmount);
  }

  move() {
    console.log(`${this.name} walks on two legs like ${this.constructor.name}`);
  }

  say() {
    console.log(`${this.name} can talk like ${this.constructor.name}`);
  }

  eat() {
    console.log(`${this.name} can eat like ${this.constructor.name}`);
  }
}

// ----------------- Create 2 objects of each class ----------------------

const animal1 = new Animals(10, 'Random Animal Name 1', 30, 4);
const animal2 = new Animals(15, 'Random Animal Name 2', 25, 2);

const mammal1 = new Mammals(5, 'Fox', 12, 4);
const mammal2 = new Mammals(7, 'Wolf', 17, 4);

const bird1 = new Birds(2, 'Pigeon', 0.5, 2);
const bird2 = new Birds(1, 'Parrot', 0.4, 2);

const fish1 = new Fish(3, 'Carp', 2.2, 'none');
const fish2 = new Fish(4, 'Herring', 0.8, 'none');

const predator1 = new Predators(10, 'Lion', 50, 4);
const predator2 = new Predators(5, 'Tigen', 40, 4);

const whale1 = new Whales(8, 'Beluga', 70, 'none');
const whale2 = new Whales(4, 'Blue Whale', 250, 'none');

const primate1 = new Primates(6, 'Chimpanzee', 12, 4);
const primate2 = new Primates(9, 'Orangutang', 90, 4);

const dog1 = new Dog(4, 'Terrier', 3, 4);
const dog2 = new Dog(5, 'Labrador', 15, 4);

const dolphin1 = new Dolphin(20, 'Striped dolphin', 70, 'none');
const dolphin2 = new Dolphin(25, 'Spotted dolphin', 75, 'none');

const human1 = new Human(30, 'Alex', 85, 4);
const human2 = new Human(31, 'Nadia', 54, 4);

// ------------------------ Testings: displaying properties and methods ------------------------------

console.log(animal1);
console.log('--------------------------');
console.log(
  `The ${animal1.constructor.name} class representative has the name ${animal1.name}`
);
console.log(`${animal1.name} age is ${animal1.age}`);
console.log(`${animal1.name} weight is ${animal1.weight}`);
console.log(`${animal1.name} numbers of limbs is ${animal1.limbAmount}`);
console.log(`${animal1.name} maximum age is ${Animals.maxAge}`);
console.log(`${animal1.name} maximum weight is ${Animals.maxWeight}`);
animal1.eat();
animal1.move();
animal1.say();
console.log(Animals.isAnimal(animal1));
console.log('--------------------------');

console.log(bird1);
console.log('--------------------------');
console.log(
  `The ${bird1.constructor.name} class representative has the name ${bird1.name}`
);
console.log(`${bird1.name} age is ${bird1.age}`);
console.log(`${bird1.name} weight is ${bird1.weight}`);
console.log(`${bird1.name} numbers of limbs is ${bird1.limbAmount}`);
console.log(`${bird1.name} maximum age is ${Birds.maxAge}`);
console.log(`${bird1.name} maximum weight is ${Birds.maxWeight}`);
bird1.eat();
bird1.move();
bird1.say();
console.log(Human.isHuman(bird1));
console.log('--------------------------');

console.log(fish2);
console.log('--------------------------');
console.log(
  `The ${fish2.constructor.name} class representative has the name ${fish2.name}`
);
console.log(`${fish2.name} age is ${fish2.age}`);
console.log(`${fish2.name} weight is ${fish2.weight}`);
console.log(`${fish2.name} numbers of limbs is ${fish2.limbAmount}`);
console.log(`${fish2.name} maximum age is ${Fish.maxAge}`);
console.log(`${fish2.name} maximum weight is ${Fish.maxWeight}`);
fish2.eat();
fish2.move();
fish2.say();
console.log(Fish.isFish(fish2));
console.log('--------------------------');

console.log(dog1);
console.log('--------------------------');
console.log(
  `The ${dog1.constructor.name} class representative has the name ${dog1.name}`
);
console.log(`${dog1.name} age is ${dog1.age}`);
console.log(`${dog1.name} weight is ${dog1.weight}`);
console.log(`${dog1.name} numbers of limbs is ${dog1.limbAmount}`);
console.log(`${dog1.name} maximum age is ${Dog.maxAge}`);
console.log(`${dog1.name} maximum weight is ${Dog.maxWeight}`);
dog1.eat();
dog1.move();
dog1.say();
console.log(Dolphin.isDolphin(dog1));
console.log('--------------------------');

console.log(dolphin2);
console.log('--------------------------');
console.log(
  `The ${dolphin2.constructor.name} class representative has the name ${dolphin2.name}`
);
console.log(`${dolphin2.name} age is ${dolphin2.age}`);
console.log(`${dolphin2.name} weight is ${dolphin2.weight}`);
console.log(`${dolphin2.name} numbers of limbs is ${dolphin2.limbAmount}`);
console.log(`${dolphin2.name} maximum age is ${Dolphin.maxAge}`);
console.log(`${dolphin2.name} maximum weight is ${Dolphin.maxWeight}`);
dolphin2.eat();
dolphin2.move();
dolphin2.say();
console.log(Dolphin.isDolphin(dolphin2));
console.log('--------------------------');

console.log(human1);
console.log('--------------------------');
console.log(
  `The ${human1.constructor.name} class representative has the name ${human1.name}`
);
console.log(`${human1.name} age is ${human1.age}`);
console.log(`${human1.name} weight is ${human1.weight}`);
console.log(`${human1.name} numbers of limbs is ${human1.limbAmount}`);
console.log(`${human1.name} maximum age is ${Human.maxAge}`);
console.log(`${human1.name} maximum weight is ${Human.maxWeight}`);
human1.eat();
human1.move();
human1.say();
console.log('--------------------------');

// ------------------- Testings: displaying class membership inference -------------------------

console.log(`${human1.name} is Animals class - ${Animals.isAnimal(human1)}`);
console.log(`${human1.name} is Mammals class - ${Mammals.isMammal(human1)}`);
console.log(`${human1.name} is Birds class - ${Birds.isBird(human1)}`);
console.log(`${human1.name} is Fish class - ${Fish.isFish(human1)}`);
console.log(
  `${human1.name} is Predators class - ${Predators.isPredator(human1)}`
);
console.log(`${human1.name} is Whales class - ${Whales.isWhale(human1)}`);
console.log(`${human1.name} is Dog class - ${Dog.isDog(human1)}`);
console.log(`${human1.name} is Dolphin class - ${Dolphin.isDolphin(human1)}`);
console.log(`${human1.name} is Human class - ${Human.isHuman(human1)}`);
