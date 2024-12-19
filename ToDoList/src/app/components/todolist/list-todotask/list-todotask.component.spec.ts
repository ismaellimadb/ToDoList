import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTodotaskComponent } from './list-todotask.component';

describe('ListTodotaskComponent', () => {
  let component: ListTodotaskComponent;
  let fixture: ComponentFixture<ListTodotaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTodotaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTodotaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
