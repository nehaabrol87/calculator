import { Component, Output, EventEmitter } from '@angular/core';
import { Result } from './result';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.css']
})
export class ChoicesComponent {
  @Output() sendResult = new EventEmitter();

  public operators: string[] = ['+',`-`,`X`, `÷`,  'AC', '='];
  public operands: number[] = [9,8,7,6,5,4,3,2,1,0];
  private currentOperator: string = '';
  private currentOperand: number;
  private previousOperand: number;
  private preCalculatedResult: number = 0;

  constructor() {
    this.previousOperand = 0;
    this.currentOperand = -1;
    this.currentOperator = '';
  }

  public onOperatorPress(operator: string) {
    this.currentOperator = operator;

    if(operator === '=' || this.currentOperand !== -1) {
      this.addResultToPrevious();
      this.sendResult.emit(this.previousOperand);
    } else if (operator === 'AC') {
      this.clear()
      this.sendResult.emit(0);
    }
  }

  private addResultToPrevious() {
    this.previousOperand = this.preCalculatedResult;
    this.currentOperand = -1;
  }

  private clear() {
    this.previousOperand = 0;
    this.currentOperator = '';
    this.currentOperand = -1;
  }

  public onOperandPress(operand: number) {
    if(this.currentOperator === '') {
      this.appendToPrevious(operand);
      this.sendResult.emit(this.previousOperand);
    } else {
      if (this.currentOperand === -1) {
        this.currentOperand = operand;
        this.preCalcResult();
        this.sendResult.emit(this.currentOperand);
      } else {
        this.appendToCurrent(operand);;
        this.preCalcResult();
        this.sendResult.emit(this.currentOperand);
      }
    }
  }

  private appendToPrevious(operand: number) {
    this.previousOperand = parseInt(this.previousOperand.toString() + operand.toString());
  }

  private appendToCurrent(operand: number) {
    this.currentOperand  = parseInt(this.currentOperand.toString() + operand.toString());;
  }

  private preCalcResult() {
    this.preCalculatedResult = new Result(this.currentOperator, this.previousOperand, this.currentOperand).preCalculate();
  }
}
