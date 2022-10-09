import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { SubscriberService } from './subscriber.service';

describe('SubscriberService', () => {
  let service: SubscriberService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(SubscriberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a getSubscribers function', () => {
    expect(service.getSubscribers).toBeTruthy();
  });

  it('should have a addSubscriber function', () => {
    expect(service.addSubscriber).toBeTruthy();
  });
});
