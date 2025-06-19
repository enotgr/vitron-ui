import { Component, input } from '@angular/core';

import { Size } from '../../models';
import { VuiGlassContentWrapper } from '../glass-content-wrapper';

@Component({
  selector: 'vui-button',
  templateUrl: './button.html',
  styleUrl: './button.scss',
  standalone: true,
  imports: [VuiGlassContentWrapper],
})
export class VuiButton {
  readonly size = input<Size>('md');
  readonly textColor = input<string>('primary');
  readonly type = input<string>('button');
  readonly disabled = input<boolean>(false);
  readonly wide = input<boolean>(false);

  get textColorClass(): string {
    return this.textColor() ? `vui-button-color--${this.textColor()}` : '';
  }

  get sizeClass(): string {
    return this.size() ? `vui-button-size--${this.size()}` : '';
  }
}
