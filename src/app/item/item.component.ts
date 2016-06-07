import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Todo, UNSOLVED_COMPLETE, UNSOLVED_UNDO_COMPLETE, UNSOLVED_DESTROY } from '../shared/ngrx/reducers/todos';

@Component({
  moduleId: module.id,
  selector: 'app-item',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() complete = new EventEmitter();
  @Output() remove = new EventEmitter();
  
  public header: string = '';
  public subHeader: string = '';
  
  public ngOnInit() {
    [this.header, this.subHeader] = this.todo.text.split(' ');
  }

  private onRemove() {
    this.remove.emit(this.todo.id);
  }
  
  private onComplete() {
    if (this.todo.complete === true) {
      this.complete.emit({
        id: this.todo.id,
        complete: true
      });
    } else {
      this.complete.emit({
        id: this.todo.id,
        complete: false
      });
    }
  }
}
