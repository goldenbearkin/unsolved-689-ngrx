import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { List } from 'immutable';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Output() create = new EventEmitter()
  
  public newTodo: string = '';
  
  private onChange() {
    if (this.newTodo != '') {
      this.create.emit(this.newTodo);
      this.newTodo = '';
    }
  }
}
