import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListPostComponent } from './list-post.component';

describe('ListPostComponent', () => {
  let component: ListPostComponent;
  let fixture: ComponentFixture<ListPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPostComponent, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
