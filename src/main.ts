import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideStore } from '@ngrx/store';
import { enableProdMode } from '@angular/core';
// import { todosReducer } from './app/shared/ngrx/reducers/todos'
import { Unsolved689NgrxAppComponent, environment } from './app/';

import { test } from './app/test'

console.log(test);

if (environment.production) {
  enableProdMode();
}

bootstrap(Unsolved689NgrxAppComponent, [
  provideStore({ 
    // todos: todosReducer
  })
]);