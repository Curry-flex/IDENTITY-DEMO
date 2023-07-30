import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberIDComponent } from './member-id.component';

describe('MemberIDComponent', () => {
  let component: MemberIDComponent;
  let fixture: ComponentFixture<MemberIDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberIDComponent]
    });
    fixture = TestBed.createComponent(MemberIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
