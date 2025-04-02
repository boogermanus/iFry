import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { provideHttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have method getData', () => {
    expect(service.getData).toBeDefined();
  });

  it('should not throw for getData', () => {
    expect(() => service.getData()).not.toThrow();
  });

  it('should have data when getData is called', async () => {
    let data = service.getData();
    let expected = await lastValueFrom(data);

    expect(expected.length).toBeGreaterThan(0);
  });
});
