import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonComponent } from './button/button.component'
import { ContainerComponent } from './container/container.component'
import { InputComponent } from './input/input.component'
import { CardComponent } from './card/card.component'
import { ListComponent } from './list/list.component'
import { ListItemComponent } from './list-item/list-item.component'
import { FormsModule } from '@angular/forms'
import { TextareaComponent } from './textarea/textarea.component'
import { AbstractNgModelComponent } from './ng-model-abstract/ng-model-abstract.component'
import { AbstractInputComponent } from './abstract-input/abstract-input.component'
import { ExpandComponent } from './expand/expand.component'
import { MessageComponent } from './message/message.component'

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    ButtonComponent,
    ContainerComponent,
    InputComponent,
    CardComponent,
    ListComponent,
    ListItemComponent,
    TextareaComponent,
    AbstractNgModelComponent,
    AbstractInputComponent,
    ExpandComponent,
    MessageComponent,
  ],
  exports: [
    ButtonComponent,
    ContainerComponent,
    InputComponent,
    CardComponent,
    ListComponent,
    ListItemComponent,
    TextareaComponent,
    ExpandComponent,
    MessageComponent,
  ],
})
export class UiModule {}
