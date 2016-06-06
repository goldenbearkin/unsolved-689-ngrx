import { Component, OnInit } from '@angular/core';
import { List } from 'immutable';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
    // console.log(List);
  }

  ngOnInit() {
    console.log(List);
  }

}
