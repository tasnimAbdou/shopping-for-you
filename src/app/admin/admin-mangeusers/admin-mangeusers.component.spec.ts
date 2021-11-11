import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMangeusersComponent } from './admin-mangeusers.component';

describe('AdminMangeusersComponent', () => {
  let component: AdminMangeusersComponent;
  let fixture: ComponentFixture<AdminMangeusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMangeusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMangeusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
