import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'vui-glass-content-wrapper',
  templateUrl: './glass-content-wrapper.html',
  styleUrl: './glass-content-wrapper.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VuiGlassContentWrapper {
  readonly liquid = input<boolean>(true);
}
