import { TestBed } from '@angular/core/testing';

import { GetAllRestoResolver } from './get-all-resto.resolver';

describe('GetAllRestoResolver', () => {
  let resolver: GetAllRestoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetAllRestoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
