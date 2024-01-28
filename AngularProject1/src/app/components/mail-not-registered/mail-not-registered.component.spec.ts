import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailNotRegisteredComponent } from './mail-not-registered.component';

describe('MailNotRegisteredComponent', () => {
  let component: MailNotRegisteredComponent;
  let fixture: ComponentFixture<MailNotRegisteredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MailNotRegisteredComponent]
    });
    fixture = TestBed.createComponent(MailNotRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
