import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcludeTodotaskComponent } from './conclude-todotask.component';

describe('ConcludeTodotaskComponent', () => {
  let component: ConcludeTodotaskComponent;
  let fixture: ComponentFixture<ConcludeTodotaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcludeTodotaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcludeTodotaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
