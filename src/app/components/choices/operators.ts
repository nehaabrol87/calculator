import { AdditionInterface, SubtractionInterface, MultiplicationInterface, ManageOperator } from './../../models/operator';

export class Addition implements AdditionInterface, ManageOperator {
  public operand1: number = 0;
  public operand2: number = 0;

  constructor(operand1: number, operand2: number) {
    this.operand1 = operand1;
    this.operand2 = operand2;
  }
  add() {
    return this.operand1 + this.operand2;
  }

  preCalculate(): number {
    return this.add();
  }
}

export class Subtraction implements SubtractionInterface, ManageOperator {
  public operand1: number = 0;
  public operand2: number = 0;

  constructor(operand1: number, operand2: number) {
    this.operand1 = operand1;
    this.operand2 = operand2;
  }
  subtract() {
    return this.operand1 - this.operand2;
  }

  preCalculate(): number {
    return this.subtract();
  }
}

  export class Multiplication implements MultiplicationInterface, ManageOperator {
    public operand1: number = 0;
    public operand2: number = 0;

    constructor(operand1: number, operand2: number) {
      this.operand1 = operand1;
      this.operand2 = operand2;
    }
    multiply() {
      return this.operand1 * this.operand2;
    }

    preCalculate(): number {
      return this.multiply();
    }
  }
