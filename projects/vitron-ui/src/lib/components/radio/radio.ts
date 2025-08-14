import { Component, forwardRef, input, output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { generateElementId } from '../../utils';

@Component({
  selector: 'vui-radio',
  templateUrl: './radio.html',
  styleUrl: './radio.scss',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VuiRadio),
      multi: true
    }
  ]
})
export class VuiRadio implements ControlValueAccessor {
  // TODO: Move id generation to utils
  readonly id = input<string>(generateElementId('vui-input'));
  readonly label = input<string>('');
  readonly name = input<string>('');
  readonly value = input<string>('');
  readonly model = input<string>();
  readonly disabled = input<boolean>(false);

  readonly change = output<string>();

  selected = false;

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(val: string): void {
    this.selected = val === this.value();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  select(): void {
    if (this.disabled() || this.selected) return;

    this.selected = true;
    this.onChange(this.value());
    this.change.emit(this.value());
  }
}
