/* eslint-disable @typescript-eslint/ban-types */
import { Component, forwardRef, Input } from '@angular/core'
import { NG_VALUE_ACCESSOR } from '@angular/forms'
import { AbstractInputComponent } from '../abstract-input/abstract-input.component'

@Component({
	selector: 'cost-control-input',
	template: `
		<input
			[type]="type"
			placeholder="{{ placeholder }}"
			class="px-4 rounded-md border-slate-200 border-2 h-10"
			[class.w-full]="fullWidth"
			[(ngModel)]="value"
			(blur)="onTouched()"
			[disabled]="disabled"
		/>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => InputComponent),
			multi: true,
		},
	],
})
export class InputComponent extends AbstractInputComponent {
	@Input() fullWidth?: true
}
