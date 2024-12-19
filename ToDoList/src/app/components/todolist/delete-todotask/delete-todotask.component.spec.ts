import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTodotaskComponent } from './delete-todotask.component';

describe('DeleteTodotaskComponent', () => {
  let component: DeleteTodotaskComponent;
  let fixture: ComponentFixture<DeleteTodotaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteTodotaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTodotaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
