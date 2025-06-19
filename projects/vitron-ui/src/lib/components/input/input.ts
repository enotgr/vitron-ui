import { Component, ElementRef, forwardRef, input, output, viewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { VuiGlassContentWrapper } from '../glass-content-wrapper';

@Component({
  selector: 'vui-input',
  templateUrl: './input.html',
  styleUrl: './input.scss',
  standalone: true,
  imports: [VuiGlassContentWrapper],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VuiInput),
      multi: true
    }
  ]
})
export class VuiInput implements ControlValueAccessor {
  private readonly inputRef = viewChild<ElementRef<HTMLInputElement>>('input');

  // readonly value = input<string>('');
  // TODO: Move id generation to utils
  readonly id = input<string>(`vui-input-${Math.random().toString(36).substring(2, 10)}`);
  readonly name = input<string>('');
  readonly label = input<string>('');
  readonly placeholder = input<string>('');
  readonly type = input<string>('text');
  readonly disabled = input<boolean>(false);
  readonly readonly = input<boolean>(false);
  readonly size = input<string>('20');
  readonly maxlength = input<string>('');
  readonly required = input<boolean>(false);
  readonly autofocus = input<boolean>(false);
  readonly autocomplete = input<string>('off');
  // readonly mask = input<MaskOptions>(false);

  readonly input = output<Event>();
  readonly change = output<Event>();
  readonly focus = output<void>();
  readonly blur = output<void>();
  readonly click = output<Event>();
  readonly keydown = output<KeyboardEvent>();
  readonly keyup = output<KeyboardEvent>();
  readonly keypress = output<KeyboardEvent>();
  readonly paste = output<ClipboardEvent>();
  readonly cut = output<ClipboardEvent>();

  value = '';
  focused = false;

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(val: any): void {
    this.value = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
    this.input.emit(event);
  }

  handleFocus() {
    this.focused = true;
    this.focus.emit();
  }

  handleBlur() {
    this.focused = false;
    this.onTouched();
    this.blur.emit();
  }
}
