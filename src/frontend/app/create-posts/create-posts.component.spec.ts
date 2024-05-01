import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreatePostsComponent } from './create-posts.component';

describe('CreatePostsComponent', () => {
  let component: CreatePostsComponent;
  let fixture: ComponentFixture<CreatePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePostsComponent, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
