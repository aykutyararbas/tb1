import { Injectable } from '@angular/core';
import {Groupitem} from './group/groupitem';

@Injectable({
  providedIn: 'root'
})
export class ToolbaritemsproviderService {

  constructor() { }



  /**
   * Get's groups
   * In this example it mocks groups
   */
  getGroups(): any[] {
    const groups = [];
    groups.push({
      label: 'File',
      type: 'file'
    });

    groups.push({
      label: 'Edit',
      type: 'edit'
    });

    groups.push({
      label: 'Configure',
      type: 'config'
    });

    return groups;
  }

  getGroupItems(groupType: string): Groupitem[] {
    const groupItems = [];
    switch (groupType) {
      case 'file': {
        groupItems.push(this.getSaveItem());
        groupItems.push(this.getNewItem());
        break;
      }
      case 'edit': {
        groupItems.push(this.getUpdateItem());
        groupItems.push(this.getUndoItem());
        groupItems.push(this.getRedoItem());
        break;
      }
      case 'config': {
        groupItems.push(this.getAddItem());
        break;
      }
    }
    return groupItems;
  }


  getSaveItem() {
    return {
      name: 'save',
      label: 'Save',
      action: this.getFunctionForGroupItem('save'),
      icon: 'save'
    };
  }

  getNewItem() {
      return {
        name: 'new',
        label: 'New',
        action: this.getFunctionForGroupItem('new'),
        icon: 'file'
      };
  }

  getUpdateItem() {
    return {
      name: 'update',
      label: 'Update',
      action: this.getFunctionForGroupItem('update'),
      icon: 'pen'
    };
  }

  getUndoItem() {
    return {
      name: 'undo',
      label: 'Undo',
      action: this.getFunctionForGroupItem('undo'),
      icon: 'undo'
    };
  }

  getRedoItem() {
    return {
      name: 'redo',
      label: 'Redo',
      action: this.getFunctionForGroupItem('redo'),
      icon: 'redo'
    };
  }

  getAddItem() {
    return {
      name: 'add',
      label: 'Add',
      action: this.getFunctionForGroupItem('add'),
      icon: 'plus'
    };
  }


  getFunctionForGroupItem(groupItemName: string): Function {
      let action = null;
      switch (groupItemName) {
        case 'save': {
            action = this.save;
            break;
        }
        case 'new': {
          action = this.new;
          break;
        }
        case 'update': {
          action = this.update;
          break;
        }
        case 'undo': {
          action = this.undo;
          break;
        }
        case 'redo': {
          action = this.redo;
          break;
        }

        case 'add': {
          action = this.add;
          break;
        }
      }

      return action;
  }



   save() {
    alert('New clicked ');
  }

  new() {
    alert('New clicked ');
  }


  update() {
    alert('Update clicked ');
  }



  undo() {
    alert('Undo clicked ');
  }

  redo() {
    alert('Redo clicked ');
  }



  add() {
    alert('Add clicked ');
  }


}
