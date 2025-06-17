import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

import { Size } from '../../models';

@Component({
  selector: 'vui-button',
  templateUrl: './button.html',
  styleUrl: './button.scss',
  standalone: true,
})
export class VuiButton {
  readonly size = input<Size>('md');
  readonly color = input<string>('primary');
  readonly disabled = input<boolean>(false);
  readonly wide = input<boolean>(false);

  get colorClass(): string {
    return this.color() ? `vui-button-color--${this.color()}` : '';
  }

  get sizeClass(): string {
    return this.size() ? `vui-button-size--${this.size()}` : '';
  }
}
