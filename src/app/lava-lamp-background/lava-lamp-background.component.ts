import { AfterViewInit, Component, OnDestroy, ElementRef } from '@angular/core';

interface LavaBlob {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

@Component({
  selector: 'app-lava-lamp-background',
  standalone: true,
  imports: [],
  templateUrl: './lava-lamp-background.component.html',
  styleUrl: './lava-lamp-background.component.css'
})
export class LavaLampBackgroundComponent implements AfterViewInit, OnDestroy {
  private lava_blobs: LavaBlob[] = [
    { x: 20, y: 20, vx: 0.09, vy: 0.02 },
    { x: 80, y: 80, vx: -0.04, vy: -0.015 },
    { x: 70, y: 50, vx: -0.02, vy: -0.015 }
  ];

  private rafId?: number;

  constructor(private el: ElementRef<HTMLElement>){}

  ngAfterViewInit(): void {
    this.animate();
  }

  ngOnDestroy(): void {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }

  private animate = (): void => {
    this.lava_blobs.forEach((b, i) => {
      b.vx += (Math.random() - 0.5) * 0.01;
      b.vy += (Math.random() - 0.5) * 0.01;

      b.vx *= 0.995;
      b.vy *= 0.995;


      b.x += b.vx;
      b.y += b.vy;

      if (b.x < 10 || b.x > 90) b.vx *= -1;
      if (b.y < 10 || b.y > 90) b.vy *= -1;

      this.el.nativeElement.style.setProperty(`--x${i + 1}`, `${b.x}%`);
      this.el.nativeElement.style.setProperty(`--y${i + 1}`, `${b.y}%`);
    });

    this.rafId = requestAnimationFrame(this.animate);
  };
}