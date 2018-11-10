import { TestBed } from '@angular/core/testing';

import { FakeEndpointService } from './fake-endpoint.service';

describe('FakeEndpointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakeEndpointService = TestBed.get(FakeEndpointService);
    expect(service).toBeTruthy();
  });
});
