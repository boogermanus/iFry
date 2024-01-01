import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfryComponent } from './ifry.component';
import {MatLegacyFormFieldModule as MatFormFieldModule} from "@angular/material/legacy-form-field";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatLegacyCardModule as MatCardModule} from "@angular/material/legacy-card";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {FormsModule} from "@angular/forms";


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
