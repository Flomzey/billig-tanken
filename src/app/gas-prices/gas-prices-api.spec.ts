import { TestBed } from '@angular/core/testing';

import { GasPricesApi } from './gas-prices-api';

describe('GasPricesApi', () => {
  let service: GasPricesApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GasPricesApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
