import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {CanvasComponent} from './canvas/canvas.component';

const routes: Routes = [
  {path: 'tb1', component: CanvasComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
