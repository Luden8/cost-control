import { Component } from '@angular/core'

@Component({
  selector: 'cost-control-expand',
  template: `<div class="">
    <div
      class="cursor-pointer bg-slate-100 hover:bg-slate-200 p-4 select-none flex"
    >
      <div (click)="toggleExpand()">
        <ng-content select="[header-left]"></ng-content>
      </div>
      <ng-content select="[header-right]"></ng-content>
    </div>
    <div *ngIf="expand" class="p-4 bg-white">
      <ng-content></ng-content>
    </div>
  </div>`,
})
export class ExpandComponent {
  expand = false

  toggleExpand() {
    this.expand = !this.expand
  }
}
