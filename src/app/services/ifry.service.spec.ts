import { TestBed } from '@angular/core/testing';

import { IfryService } from './ifry.service';

describe('IfryService', () => {
  let service: IfryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IfryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have method calculate', () =>{
    expect(() => service.calculate(0,0)).not.toThrow();
  });
  it('should calculate and reduce temp by 35 degrees', () => {
    let result = service.calculate(400, 0);
    expect(result.Temp).toEqual(375);
  });

  it('should calculate and increase time by 20%', () => {
    let result = service.calculate(0, 10);

    expect(result.Time).toEqual(8);
  })
});
