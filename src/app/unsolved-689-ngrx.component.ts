import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component'

//redux
import { Store } from '@ngrx/store';
import { AppState } from './shared/ngrx/state';
import { 
  Todo, 
  UNSOLVED_CREATE, 
  UNSOLVED_TOGGLE_COMPLETE_ALL, 
  UNSOLVED_DESTROY_COMPLETED,
  UNSOLVED_UNDO_COMPLETE,
  UNSOLVED_DESTROY,
  UNSOLVED_COMPLETE
} from './shared/ngrx/reducers/todos';

@Component({
  moduleId: module.id,
  selector: 'unsolved-689-ngrx-app',
  templateUrl: 'unsolved-689-ngrx.component.html',
  styleUrls: ['unsolved-689-ngrx.component.css'],
  directives: [
    HeaderComponent
  ]
})
export class Unsolved689NgrxAppComponent {
  constructor(public store: Store<AppState>) {
    console.log(store);
  }
  
  private onCreate(event) {
    this.store.dispatch({
      type: UNSOLVED_CREATE,
      payload: event
    });
  }
}
