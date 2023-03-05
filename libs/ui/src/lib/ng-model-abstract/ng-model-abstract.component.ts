import { ControlValueAccessor } from '@angular/forms'
import { Component, Input } from '@angular/core'

@Component({ template: '' })
export class AbstractNgModelComponent<T> implements ControlValueAccessor {
  @Input()
  @Input()
  disabled!: boolean

  @Input()
  set value(value: T) {
    this._value = value
    this.onChange(this.value)
  }

  get value(): T {
    return this._value
  }

  onChange!: (value: T) => void
  onTouched!: () => void

  protected _value!: T

  writeValue(value: T): void {
    this._value = value
    // setTimeout(() => this.cdRef.detectChanges(), 0);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled
  }
}
