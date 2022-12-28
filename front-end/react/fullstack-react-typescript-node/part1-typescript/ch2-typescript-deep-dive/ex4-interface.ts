namespace Ex4Interface {
  interface Thing {
    getDescription: () => string;
  }

  interface Vehicle extends Thing {
    updateNumWheel: (num: number) => void;
    getNumWheels: () => number;
  }

  class Benz implements Vehicle {
    private readonly name: string;
    private numWheels: number;
    private readonly price: number;

    constructor(name: string, numWheels: number, price: number) {
      this.name = name;
      this.numWheels = numWheels ?? 4;
      this.price = price;
    }

    getDescription(): string {
      return `Benz(${this.name}) has ${this.numWheels} and its price is \$${this.price}`;
    }

    getNumWheels(): number {
      return this.numWheels;
    }

    updateNumWheel(numWheels: number): void {
      this.numWheels = numWheels;
    }
  }

  function printThings(thing: Thing): void {
    console.log(thing.getDescription());
  }

  const myBenz = new Benz('First Car', 6, 20000);
  printThings(myBenz);
}