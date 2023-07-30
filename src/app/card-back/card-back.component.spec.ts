import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBackComponent } from './card-back.component';

describe('CardBackComponent', () => {
  let component: CardBackComponent;
  let fixture: ComponentFixture<CardBackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBackComponent]
    });
    fixture = TestBed.createComponent(CardBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
