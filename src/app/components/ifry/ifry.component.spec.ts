import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfryComponent } from './ifry.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";


describe('IfryComponent', () => {
  let component: IfryComponent;
  let fixture: ComponentFixture<IfryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfryComponent ],
      imports: [MatFormFieldModule, MatInputModule, NoopAnimationsModule, MatCardModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
