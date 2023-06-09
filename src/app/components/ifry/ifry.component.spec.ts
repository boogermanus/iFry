import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfryComponent } from './ifry.component';

describe('IfryComponent', () => {
  let component: IfryComponent;
  let fixture: ComponentFixture<IfryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfryComponent ]
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
