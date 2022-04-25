import { TestBed } from '@angular/core/testing';

import { ChatserverService } from './chatserver.service';

describe('ChatserverService', () => {
  let service: ChatserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
