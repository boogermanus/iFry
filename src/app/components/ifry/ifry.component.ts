import {Component, inject, OnInit} from '@angular/core';
import { FryCalculation } from "../../models/fry-calculation";
import { IfryService } from "../../services/ifry.service";
import {IFryStore} from "../../stores/IfryStore";

@Component({
    selector: 'app-ifry',
    templateUrl: './ifry.component.html',
    styleUrls: ['./ifry.component.css'],
    standalone: false
})
export class IfryComponent {

  public temp: number = 0;
  public time: number = 0;
  public calculation: FryCalculation = new FryCalculation(0, 0);
  public store = inject(IFryStore);
  constructor(private service: IfryService) { }

  public calculate(): void {
    this.calculation = this.service.calculate(this.temp, this.time);
  }
}
