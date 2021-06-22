import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolictsPage } from './policts.page';

const routes: Routes = [
  {
    path: '',
    component: PolictsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolictsPageRoutingModule {}
