import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg[icon]',
  standalone: true,
  imports: [],
  template: `<svg:use [attr.href]="href"></svg:use>`,
  styles: [''],
})
export class HomeSvgComponent {
  @Input() icon: string = '';

  get href(): string {
    return `/assets/images/svg/${this.icon}.svg#${this.icon}`;
  }
}
