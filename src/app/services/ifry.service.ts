import { Injectable } from '@angular/core';
import {FryCalculation} from "../models/fry-calculation";

@Injectable({
  providedIn: 'root'
})
export class IfryService {
  private readonly TEMP_DECREASE = 25
  private readonly TIME_DECREASE = 0.20;
  constructor() { }

  public calculate(temp: number, timeInMinutes: number) : FryCalculation {
    let tempResult = this.checkValueForZero(temp - this.TEMP_DECREASE);
    let timeResult = this.checkValueForZero(timeInMinutes - (timeInMinutes * this.TIME_DECREASE));

    return new FryCalculation(tempResult, timeResult);
  }

  private checkValueForZero(value: number): number {
    if(value < 0)
      return 0;
    else
      return value;
  }
}
