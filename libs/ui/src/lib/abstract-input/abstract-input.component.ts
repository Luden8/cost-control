import { Component, EventEmitter, Input, Output } from '@angular/core'
import { AbstractNgModelComponent } from '../ng-model-abstract/ng-model-abstract.component'

@Component({ template: '' })
export class AbstractInputComponent extends AbstractNgModelComponent<string> {
  @Input()
  readonly = false

  @Input()
  required = false

  @Input()
  placeholder = ''

  @Input()
  type = 'text'

  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-native
  blur = new EventEmitter<void>()

  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-native
  focus = new EventEmitter<void>()

  get inputReadonly(): boolean {
    return this.readonly || typeof this.readonly !== 'boolean'
  }

  get inputRequired(): boolean {
    return this.required || typeof this.required !== 'boolean'
  }
}
