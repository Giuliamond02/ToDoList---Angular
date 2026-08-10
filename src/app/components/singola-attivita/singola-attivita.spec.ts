import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingolaAttivita } from './singola-attivita';

describe('SingolaAttivita', () => {
  let component: SingolaAttivita;
  let fixture: ComponentFixture<SingolaAttivita>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingolaAttivita],
    }).compileComponents();

    fixture = TestBed.createComponent(SingolaAttivita);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
