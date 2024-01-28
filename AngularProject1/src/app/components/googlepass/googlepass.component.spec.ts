import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglepassComponent } from './googlepass.component';

describe('GooglepassComponent', () => {
  let component: GooglepassComponent;
  let fixture: ComponentFixture<GooglepassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GooglepassComponent]
    });
    fixture = TestBed.createComponent(GooglepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
