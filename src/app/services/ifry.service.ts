import { Injectable } from '@angular/core';
import {FryCalculation} from "../models/fry-calculation";

@Injectable({
  providedIn: 'root'
})
export class IfryService {
  private readonly TEMP = 35
  private readonly TIME = 0.20;
  constructor() { }

  public calculate(temp: number, timeInMinutes: number) : FryCalculation {
    let tempResult = temp - this.TEMP;
    let timeResult = timeInMinutes + (timeInMinutes * this.TIME);

    return new FryCalculation(tempResult, timeResult);
  }
}
