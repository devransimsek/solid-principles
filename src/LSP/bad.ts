class Bird {
  fly(): void {
    console.log('Flying in the sky!');
  }
}

class Ostrich extends Bird {
  fly(): void {
    throw new Error("Ostriches can't fly!");
  }
}

function makeItFly(bird: Bird): void {
  bird.fly();
}

const bird = new Bird();
const ostrich = new Ostrich();

makeItFly(bird);       // OK
makeItFly(ostrich);    // Error
