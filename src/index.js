class Animals {
  constructor(type) {
    this.type = type;
  }

  // move(), say() and eat()
}

class Mammals extends Animals {
  constructor(type, speed) {
    super(type);
    this.speed = speed;
  }
}

class Birds extends Animals {
  constructor(type) {
    this.type = type;
  }
  // move(), say() and eat()
}

class Fish extends Animals {
  constructor(type) {
    this.type = type;
  }
  // move(), say() and eat()
}

class Predators extends Mammals {
  constructor(type) {
    this.type = type;
  }
}

class Whales extends Mammals {
  constructor(type) {
    this.type = type;
  }
}

class Primates extends Mammals {
  constructor(type) {
    this.type = type;
  }
}

class Dog extends Predators {
  constructor(type) {
    this.type = type;
  }
  // move(), say() and eat()
}

class Dolphin extends Whales {
  constructor(type) {
    this.type = type;
  }
  // move(), say() and eat()
}

class Human extends Primates {
  constructor(type) {
    this.type = type;
  }
  // move(), say() and eat()
}

