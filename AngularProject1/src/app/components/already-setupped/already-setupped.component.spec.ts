import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadySetuppedComponent } from './already-setupped.component';

describe('AlreadySetuppedComponent', () => {
  let component: AlreadySetuppedComponent;
  let fixture: ComponentFixture<AlreadySetuppedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlreadySetuppedComponent]
    });
    fixture = TestBed.createComponent(AlreadySetuppedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
