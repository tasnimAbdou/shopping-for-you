import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssanimationComponent } from './cssanimation.component';

describe('CssanimationComponent', () => {
  let component: CssanimationComponent;
  let fixture: ComponentFixture<CssanimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssanimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
