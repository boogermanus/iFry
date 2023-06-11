import {Component, OnInit} from '@angular/core';
import {FryCalculation} from "../../models/fry-calculation";
import {IfryService} from "../../services/ifry.service";

@Component({
  selector: 'app-ifry',
  templateUrl: './ifry.component.html',
  styleUrls: ['./ifry.component.css'],
})
export class IfryComponent implements OnInit {

  public temp: number = 0;
  public time: number = 0;
  public calculation: FryCalculation = new FryCalculation(0,0);
  constructor(private service: IfryService) { }

  ngOnInit(): void {
  }

  public calculate(): void {
    this.calculation = this.service.calculate(this.temp, this.time);
  }
}
