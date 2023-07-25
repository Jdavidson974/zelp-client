import { TestBed } from '@angular/core/testing';

import { GetVilleResolver } from './get-ville.resolver';

describe('GetVilleResolver', () => {
  let resolver: GetVilleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetVilleResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
