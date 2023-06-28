import {IFryCalculation} from "../interfaces/i-fry-calculation";

export class FryCalculationInput implements IFryCalculation {
  public temp: number = 0;
  public time: number = 0;
}
