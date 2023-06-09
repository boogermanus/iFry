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
    let result = service.calculate(0,0);
    expect(result).toBeGreaterThanOrEqual(0);
  })
});
