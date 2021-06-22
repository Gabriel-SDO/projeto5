import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { About1Page } from './about1.page';

const routes: Routes = [
  {
    path: '',
    component: About1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class About1PageRoutingModule {}
