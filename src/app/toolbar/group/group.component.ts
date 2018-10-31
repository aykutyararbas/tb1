import {Component, Input, OnInit} from '@angular/core';
import {Groupitem} from './groupitem';
import {ToolbaritemsproviderService} from '../toolbaritemsprovider.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  @Input()
  group: any;

  items: Groupitem[] ;

  constructor(private toolbaritemsProvider: ToolbaritemsproviderService) {

  }

  ngOnInit() {
    this.items = this.toolbaritemsProvider.getGroupItems(this.group.type);
  }

}
