import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'vui-glass-filter',
  templateUrl: './glass-filter.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VuiGlassFilter {}
