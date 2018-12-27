import { TestBed } from '@angular/core/testing';

import { Messaging1Service } from './messaging1.service';

describe('Messaging1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Messaging1Service = TestBed.get(Messaging1Service);
    expect(service).toBeTruthy();
  });
});
