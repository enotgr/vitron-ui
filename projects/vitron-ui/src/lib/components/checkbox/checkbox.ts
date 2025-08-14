import {
  Component,
  forwardRef,
  input,
  output,
  signal,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

import { generateElementId } from '../../utils';

@Component({
  selector: 'vui-checkbox',
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VuiCheckbox),
      multi: true
    }
  ]
})
export class VuiCheckbox implements ControlValueAccessor {
  readonly id = input<string>(generateElementId('vui-input'));
  readonly label = input<string>('');
  readonly disabled = input<boolean>(false);
  readonly checkedChange = output<boolean>();

  checked = signal(false);

  private onChange = (_: any) => {};
  private onTouched = () => {};

  writeValue(value: any): void {
    this.checked.set(!!value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  toggle(): void {
    if (this.disabled()) return;

    const newValue = !this.checked();
    this.checked.set(newValue);
    this.onChange(newValue);
    this.checkedChange.emit(newValue);
  }
}
