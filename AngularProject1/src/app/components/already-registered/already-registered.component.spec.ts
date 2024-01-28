import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyRegisteredComponent } from './already-registered.component';

describe('AlreadyRegisteredComponent', () => {
  let component: AlreadyRegisteredComponent;
  let fixture: ComponentFixture<AlreadyRegisteredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlreadyRegisteredComponent]
    });
    fixture = TestBed.createComponent(AlreadyRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
