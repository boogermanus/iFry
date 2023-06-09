import { Injectable } from '@angular/core';
import {FryCalculation} from "../models/fry-calculation";

@Injectable({
  providedIn: 'root'
})
export class IfryService {

  constructor() { }

  public calculate(temp: number, timeInMinutes: number) : FryCalculation {
    return new FryCalculation(0,0)
  }
}
