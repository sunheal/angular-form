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

  it('should have subscribers property', () => {
    expect(component.subscribers).toBeTruthy();
  });

  it('should have addSubscriber function', () => {
    expect(component.addSubscriber).toBeTruthy();
  });

  it('should display a table with id="subscribers-table"', () => {
    const table: HTMLElement = fixture.nativeElement.querySelector("table")
    expect(table.id).toContain('subscribers-table');
  });

  it('should display table headers', () => {
    const th: HTMLElement = fixture.nativeElement.querySelector("th")
    expect(th.textContent).toContain('Email');
  });

  it('should display table headers', () => {
    const th: HTMLElement = fixture.nativeElement.querySelector("th")
    expect(th.textContent).toContain('Email');
  });


});
