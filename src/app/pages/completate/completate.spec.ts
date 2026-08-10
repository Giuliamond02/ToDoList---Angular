import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Completate } from './completate';

describe('Completate', () => {
  let component: Completate;
  let fixture: ComponentFixture<Completate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Completate],
    }).compileComponents();

    fixture = TestBed.createComponent(Completate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
