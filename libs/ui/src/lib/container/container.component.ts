import { Component, Input } from '@angular/core'

@Component({
  selector: 'cost-control-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  @Input() fullHeight?: boolean = false
}
