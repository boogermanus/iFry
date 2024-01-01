import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {IfryComponent} from "./components/ifry/ifry.component";
import {MatLegacyFormFieldModule as MatFormFieldModule} from "@angular/material/legacy-form-field";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {MatLegacyCardModule as MatCardModule} from "@angular/material/legacy-card";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        IfryComponent
      ],
      imports: [MatFormFieldModule, MatInputModule, MatCardModule]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'iFry'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('iFry');
  });

});
