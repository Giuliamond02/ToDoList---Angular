import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaHttp } from './prova-http';

describe('ProvaHttp', () => {
  let component: ProvaHttp;
  let fixture: ComponentFixture<ProvaHttp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvaHttp],
    }).compileComponents();

    fixture = TestBed.createComponent(ProvaHttp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
