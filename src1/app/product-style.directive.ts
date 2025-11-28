import { Directive, ElementRef, Input, OnInit, HostListener, Renderer2 } from '@angular/core';
 import { Item } from './shopping-cart/models/Item';
//import { product } from './shopping-cart/models/Item';

@Directive({
  selector: '[appProductStyle]',
  standalone: true
})
export class ProductStyleDirective implements OnInit {

  @Input('appProductStyle') product!: Item;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.applyInitialStyles();
  }

  private applyInitialStyles(): void {
    // Highlight discounted products
    if (this.product.discount && this.product.discount > 0) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid #28a745');
      this.renderer.setStyle(this.el.nativeElement, 'boxShadow', '0 0 10px rgba(40,167,69,0.4)');
    }

    // Dim out-of-stock products
    if (!this.product.inStock) {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '0.5');
      this.renderer.setStyle(this.el.nativeElement, 'pointerEvents', 'none');
    }

    // Add default transition
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.3s ease, box-shadow 0.3s ease');
  }

  // Hover effects
  @HostListener('mouseenter') onMouseEnter() {
    if (this.product.inStock) {
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.03)');
      this.renderer.setStyle(this.el.nativeElement, 'boxShadow', '0 4px 20px rgba(0,0,0,0.2)');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.product.inStock) {
      this.renderer.removeStyle(this.el.nativeElement, 'transform');
      this.renderer.removeStyle(this.el.nativeElement, 'boxShadow');
      this.applyInitialStyles(); // restore discount highlight if any
    }
  }
}
