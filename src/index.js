class Animals {
  constructor(type) {
    this.type = type;
  }

  move() {
    console.log('I just moving anywhere like animals');
  }

  say() {
    console.log('I can just talk like animals');
  }

  eat() {
    console.log('I can just eat like animals');
  }
}

class Mammals extends Animals {
  constructor(type) {
    super(type);
    this.type = type;
  }
}

class Birds extends Animals {
  constructor(type) {
    super(type);
    this.type = type;
  }

  move() {
    console.log('I just moving anywhere like birds');
  }

  say() {
    console.log('I can just talk like birds');
  }

  eat() {
    console.log('I can just eat like birds');
  }
}

class Fish extends Animals {
  constructor(type) {
    super(type);
    this.type = type;
  }

  move() {
    console.log('I just moving anywhere like fish');
  }

  say() {
    console.log('I can just talk like fish');
  }

  eat() {
    console.log('I can just eat like fish');
  }
}

class Predators extends Mammals {
  constructor(type) {
    super(type);
    this.type = type;
  }
}

class Whales extends Mammals {
  constructor(type) {
    super(type);
    this.type = type;
  }
}

class Primates extends Mammals {
  constructor(type) {
    super(type);
    this.type = type;
  }
}

class Dog extends Predators {
  constructor(type) {
    super(type);
    this.type = type;
  }

  move() {
    console.log('I just moving anywhere like dog');
  }

  say() {
    console.log('I can just talk like dog');
  }

  eat() {
    console.log('I can just eat like dog');
  }  
}

class Dolphin extends Whales {
  constructor(type) {
    super(type);
    this.type = type;
  }

  move() {
    console.log('I just moving anywhere like dolphin');
  }

  say() {
    console.log('I can just talk like dolphin');
  }

  eat() {
    console.log('I can just eat like dolphin');
  }
}

class Human extends Primates {
  constructor(type) {
    super(type);
    this.type = type;
  }

  move() {
    console.log('I just moving anywhere like human');
  }

  say() {
    console.log('I can just talk like human');
  }

  eat() {
    console.log('I can just eat like human');
  }
}
