import { ManageOperator } from './../../models/operator';
import { Addition, Subtraction, Multiplication } from './operators';

export class Result implements ManageOperator {
  protected operator: string;
  protected operrand1: number;
  protected operrand2: number;
  protected result: number = 0;

  constructor(operator: string, operrand1: number, operrand2: number) {
    this.operator = operator;
    this.operrand1 = operrand1;
    this.operrand2 = operrand2;
  }

  preCalculate(): number {
    if(this.operator === '+') {
      this.result = new Addition(this.operrand1, this.operrand2).preCalculate()
    }

    if(this.operator === '-') {
      this.result = new Subtraction(this.operrand1, this.operrand2).preCalculate()
    }

    if(this.operator === 'X') {
      this.result = new Multiplication(this.operrand1, this.operrand2).preCalculate()
    }

   console.log(this.result);
   return this.result;
  }
}
