import { Component, Input } from '@angular/core'

@Component({
  selector: 'cost-control-message',
  template: `
    <div
      [ngClass]="{
        'bg-red-100': type === 'error',
        'text-red-900': type === 'error'
      }"
      class="p-3 rounded-md"
    >
      <ng-content></ng-content>
    </div>
  `,
})
export class MessageComponent {
  @Input()
  type: 'info' | 'warning' | 'error' = 'info'
}
