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

  public store = inject(IFryStore);
  constructor(private service: IfryService) { }

  public updateTemp(temp: number): void {
    this.store.updateTemp(temp);
  }
  public updateTime(time: number): void {
    this.store.updateTime(time);
  }
}
