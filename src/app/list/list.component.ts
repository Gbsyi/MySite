import { Component, Input, OnInit } from '@angular/core';
import ListModel from '../models/ListModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() data: ListModel = new ListModel("","","","","");

  constructor() { }

  ngOnInit(): void {
  }

}
