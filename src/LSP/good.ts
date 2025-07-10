class BaseBird {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class FlyingBird extends BaseBird {
  fly(): void {
    console.log("Flying in the sky!");
  }
}

class Ostrich1 extends BaseBird {}

class Sparrow extends FlyingBird {
  fly(): void {
    console.log("Sparrow in the sky!");
  }
}

const sparrow = new Sparrow("Sparrow 1");
sparrow.fly(); // Ok

const ostrich1 = new Ostrich1("Ostrich 1");
//ostrich1.fly(); // Error
