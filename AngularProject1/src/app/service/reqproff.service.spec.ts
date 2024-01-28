import { TestBed } from '@angular/core/testing';

import { ReqproffService } from './reqproff.service';

describe('ReqproffService', () => {
  let service: ReqproffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqproffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
