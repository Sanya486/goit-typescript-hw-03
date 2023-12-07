class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }

  public getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  public getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected tennants: Person[] = [];
  constructor(protected key: Key) {}
  public comeIn(person: Person) {
    if (this.door) {
      this.tennants.push(person);
    }
  }

  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  public openDoor(k: Key): void {
    if (k === this.key) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
