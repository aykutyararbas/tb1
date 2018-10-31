import { Component, OnInit } from '@angular/core';
import { JitCompiler} from '@angular/compiler';
import {ToolbaritemsproviderService} from './toolbaritemsprovider.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public groups: any[];

  constructor(private toolbarItemsProvider: ToolbaritemsproviderService) { }

  ngOnInit() {
    this.groups = this.toolbarItemsProvider.getGroups();
  }

}


