import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eliminate } from './eliminate';

describe('Eliminate', () => {
  let component: Eliminate;
  let fixture: ComponentFixture<Eliminate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eliminate],
    }).compileComponents();

    fixture = TestBed.createComponent(Eliminate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
