import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateCheck } from './state-check';

describe('StateCheck', () => {
  let component: StateCheck;
  let fixture: ComponentFixture<StateCheck>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateCheck]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateCheck);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
