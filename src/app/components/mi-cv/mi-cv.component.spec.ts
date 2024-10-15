import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiCvComponent } from './mi-cv.component';

describe('MiCvComponent', () => {
  let component: MiCvComponent;
  let fixture: ComponentFixture<MiCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiCvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
