import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing'
import { SubscribersComponent } from './subscribers.component';

describe('SubscribersComponent', () => {
  let component: SubscribersComponent;
  let fixture: ComponentFixture<SubscribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ SubscribersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
