import {Component, Input, OnInit} from '@angular/core';
import {Groupitem} from '../groupitem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  groupItem: Groupitem;

  constructor() { }

  ngOnInit() {
  }

  clicked() {
    if (this.groupItem.action) {
     // alert(`Clicked ${this.groupItem.label}`);
      this.groupItem.action(this);
    }
  }
}
