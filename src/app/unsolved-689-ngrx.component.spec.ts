import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Unsolved689NgrxAppComponent } from '../app/unsolved-689-ngrx.component';

beforeEachProviders(() => [Unsolved689NgrxAppComponent]);

describe('App: Unsolved689Ngrx', () => {
  it('should create the app',
      inject([Unsolved689NgrxAppComponent], (app: Unsolved689NgrxAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'unsolved-689-ngrx works!\'',
      inject([Unsolved689NgrxAppComponent], (app: Unsolved689NgrxAppComponent) => {
    // expect(app.title).toEqual('unsolved-689-ngrx works!');
  }));
});
