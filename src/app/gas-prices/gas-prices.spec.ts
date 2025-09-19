import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasPrices } from './gas-prices';

describe('GasPrices', () => {
  let component: GasPrices;
  let fixture: ComponentFixture<GasPrices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GasPrices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasPrices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
