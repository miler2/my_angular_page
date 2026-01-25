import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavaLampBackgroundComponent } from './lava-lamp-background.component';

describe('LavaLampBackgroundComponent', () => {
  let component: LavaLampBackgroundComponent;
  let fixture: ComponentFixture<LavaLampBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LavaLampBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LavaLampBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
