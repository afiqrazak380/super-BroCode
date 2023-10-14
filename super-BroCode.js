// super = refer to the parent class
//         commonly use to invoke constructor of parent class

class Animal{ // parent class with constructor

  constructor(name,age){
    this.name = name;
    this.age = age;
  }
}

class Rabit extends Animal{         // child class extends to parent class

  constructor(name, age, runSpeed){
    super(name,age); // constructor arguments refer to parent class
    this.runSpeed = runSpeed;
  }
}

class Fish extends Animal{          // child class extends to parent class

  constructor(name, age, swimSpeed){
    super(name,age); // constructor arguments refer to parent class
    this.swimSpeed = swimSpeed;
  }
}

class Bird extends Animal{          // child class extends to parent class

  constructor(name, age, flySpeed){
    super(name,age); // constructor arguments refer to parent class
    this.flySpeed = flySpeed;
  }

  speed(){  // method example
    console.log(`I move at ${this.flySpeed} mph`)
  }
}

const Hawk = new Bird("Hawk", "2", 40)
console.log(Hawk);
console.log(Hawk.name);
console.log(Hawk.age);
console.log(Hawk.flySpeed);
Hawk.speed();