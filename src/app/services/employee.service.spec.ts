import { TestBed } from '@angular/core/testing';

import { EmplyeeService } from './employee.service';

describe('EmplyeeService', () => {
  let service: EmplyeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmplyeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
