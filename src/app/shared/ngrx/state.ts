import { Todo } from './reducers/todos';
import { List } from 'immutable';

export interface AppState {
  todos: List<Todo>;
}
