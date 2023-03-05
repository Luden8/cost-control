/* eslint-disable @typescript-eslint/ban-types */
import { Component, forwardRef, Input } from '@angular/core'
import { NG_VALUE_ACCESSOR } from '@angular/forms'
import { AbstractInputComponent } from '../abstract-input/abstract-input.component'

@Component({
  selector: 'cost-control-textarea',
  template: `
    <textarea
      [rows]="rows"
      placeholder="{{ placeholder }}"
      class="p-4 rounded-md border-slate-200 border-2"
      [class.w-full]="fullWidth"
      [(ngModel)]="value"
      (blur)="onTouched()"
      [disabled]="disabled"
    ></textarea>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent extends AbstractInputComponent {
  @Input() fullWidth?: true
  @Input() rows?: number = 1
}
