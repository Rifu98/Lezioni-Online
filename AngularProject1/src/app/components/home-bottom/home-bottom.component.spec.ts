import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBottomComponent } from './home-bottom.component';

describe('HomeBottomComponent', () => {
  let component: HomeBottomComponent;
  let fixture: ComponentFixture<HomeBottomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBottomComponent]
    });
    fixture = TestBed.createComponent(HomeBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
