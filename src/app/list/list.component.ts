import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';

import { Todo, UNSOLVED_TOGGLE_COMPLETE_ALL } from '../shared/ngrx/reducers/todos';
import { ItemComponent } from '../item/item.component';

@Component({
  moduleId: module.id,
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
  directives: [
    CORE_DIRECTIVES,
    ItemComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  @Input() todos: Todo[];
  @Output() allComplete = new EventEmitter();
  @Output() complete = new EventEmitter();
  @Output() remove = new EventEmitter();
  
  private onComplete(event) {
    this.complete.emit(event);
  }
  
  private onRemove(event) {
    this.remove.emit(event);
  }
  
  private onAllComplete() {
    this.allComplete.emit({});
  }
}
