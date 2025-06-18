import { Component } from '@angular/core';

import { VuiGlassContentWrapper } from '../glass-content-wrapper';

@Component({
  selector: 'vui-card',
  templateUrl: './card.html',
  styleUrl: './card.scss',
  standalone: true,
  imports: [VuiGlassContentWrapper],
})
export class VuiCard {}
