export class Year {
  year: number;

  constructor(year: number) {
    this.year = year;
  }

  isLeapYear(): boolean {
    return this.step1();
  }

  step1(): boolean {
    if (!(this.year % 4)) {
      return this.step2();
    }
    return this.step5();
  }

  step2(): boolean {
    if (!(this.year % 100)) {
      return this.step3();
    }
    return this.step4();
  }

  step3(): boolean {
    if (!(this.year % 400)) {
      return this.step4();
    }
    return this.step5();
  }

  step4(): boolean {
    return true;
  }

  step5(): boolean {
    return false;
  }
}

export const year = new Year(2016);
