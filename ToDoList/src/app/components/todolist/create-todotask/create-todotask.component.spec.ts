import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTodotaskComponent } from './create-todotask.component';

describe('CreateTodotaskComponent', () => {
  let component: CreateTodotaskComponent;
  let fixture: ComponentFixture<CreateTodotaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTodotaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTodotaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
