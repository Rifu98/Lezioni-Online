import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConattiBannerComponent } from './conatti-banner.component';

describe('ConattiBannerComponent', () => {
  let component: ConattiBannerComponent;
  let fixture: ComponentFixture<ConattiBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConattiBannerComponent]
    });
    fixture = TestBed.createComponent(ConattiBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
