import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { FooterComponent } from './footer/footer.component';
import { Observable } from 'rxjs/Observable';
import { List } from 'immutable';

//redux
import { provideStore } from '@ngrx/store';
import { todosReducer } from './shared/ngrx/reducers/todos';
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
  providers: [
    provideStore({ 
      todos: todosReducer
    })
  ],
  directives: [
    HeaderComponent,
    ListComponent,
    FooterComponent
  ]
})
export class Unsolved689NgrxAppComponent {
  public todos$: Observable<List<Todo>>;
  public itemsLeft$: Observable<number>;
  public complete$: Observable<number>;

  constructor(public store: Store<AppState>) {
    this.todos$ = store.select(state => state.todos);
  }
  
  public ngOnInit() {
    this.itemsLeft$ = Observable.create(observer => {
      this.todos$.subscribe(todos => {
        observer.next(todos.size);
      })
    });
    
    this.complete$ = Observable.create(observer => {
      this.todos$.subscribe(todos => {
        let tmp = todos
          .filter(todo => todo.complete === true);
        observer.next(tmp.size);
      })
    });
  }
  
  private onCreate(event) {
    this.store.dispatch({
      type: UNSOLVED_CREATE,
      payload: event
    });
  }
  
  private onAllComplete() {
    this.store.dispatch({
      type: UNSOLVED_TOGGLE_COMPLETE_ALL
    })
  }
  
  private onComplete(event) {
    if (event.complete) {
      this.store.dispatch({
        type: UNSOLVED_UNDO_COMPLETE,
        payload: event.id
      })
    }
    else {
      this.store.dispatch({
        type: UNSOLVED_COMPLETE,
        payload: event.id
      })
    }
  }
  
  private onListRemove(event) {
    this.store.dispatch({
      type: UNSOLVED_DESTROY,
      payload: event
    })
  }
  
  private onFootRemove() {
    this.store.dispatch({
      type: UNSOLVED_DESTROY_COMPLETED
    })
  }
}
