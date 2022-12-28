class Speaker {
  private static numCreation: number = 0;
  private age: number;

  constructor(private readonly name: string, age: number = null) {
    this.age = age;
    Speaker.numCreation++;
  }

  says(msg: string): void {
    console.log(this.getMessage(msg));
  }

  protected getMessage(msg: string): string {
    return `${this.name} says '${msg}'`;
  }

  get Age() {
    if (this.age === null) {
      throw Error('The speaker has no age info');
    }
    return this.age;
  }

  set Age(val: number) {
    if (val <= 0) {
      throw Error(`age must be positive but ${val}`);
    }
    this.age = val;
  }

  static printClassInfo(): void {
    console.log(`Speaker class creates ${Speaker.numCreation} instances!`);
  }
}

class GlobalSpeaker extends Speaker {
  private country: string;

  constructor(name: string, age: number = null, country: string = '') {
    super(name, age);
    this.country = country;
  }

  protected getMessage(msg: string): string {
    return this.country ? `${super.getMessage(msg)} at ${this.country}` : super.getMessage(msg);
  }
}

function example4_1(): void {
  Speaker.printClassInfo();
  const yj: Speaker = new Speaker('Yoonjeong', 30);
  yj.says('Hi~');

  console.log(`Before : ${yj.Age}`);
  yj.Age = 31;
  console.log(`After : ${yj.Age}`);
  Speaker.printClassInfo();
}

function example4_2(): void {
  Speaker.printClassInfo();
  const yj: Speaker = new GlobalSpeaker('Yoonjeong', 30, 'Seoul, Korea');
  yj.says('Hello~');

  Speaker.printClassInfo();
}

//example4_1();
example4_2();
