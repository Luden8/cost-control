import { Component, Input } from '@angular/core'

@Component({
  selector: 'cost-control-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input()
  icon?: boolean = false
  @Input()
  disabled?: boolean = false
  @Input()
  type: 'submit' | 'button' = 'button'
}
