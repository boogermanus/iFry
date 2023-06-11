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
    let tempResult = temp - this.TEMP_DECREASE;

    if(tempResult < 0) {
      tempResult = 0;
    }

    let timeResult = timeInMinutes - (timeInMinutes * this.TIME_DECREASE);

    if(timeResult < 0) {
      timeResult = 0;
    }

    return new FryCalculation(tempResult, timeResult);
  }
}
