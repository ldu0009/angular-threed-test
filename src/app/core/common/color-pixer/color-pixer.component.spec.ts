import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPixerComponent } from './color-pixer.component';

describe('ColorPixerComponent', () => {
  let component: ColorPixerComponent;
  let fixture: ComponentFixture<ColorPixerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorPixerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorPixerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
