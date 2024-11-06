import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfryComponent } from './ifry.component';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';


describe('IfryComponent', () => {
  let component: IfryComponent;
  let fixture: ComponentFixture<IfryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfryComponent ],
      imports: [MatFormFieldModule, MatInputModule, NoopAnimationsModule, MatCardModule, FormsModule],
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
