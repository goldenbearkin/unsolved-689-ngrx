import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NgIf } from '@angular/common'
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
  directives: [ NgIf ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  @Input() itemsLeft: number;
  @Input() complete: number;
  @Output() remove = new EventEmitter();
  
  public onClick() {
    this.remove.emit({})
  }
}
