import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UlistComponent } from './ulist.component';

describe('UlistComponent', () => {
  let component: UlistComponent;
  let fixture: ComponentFixture<UlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
