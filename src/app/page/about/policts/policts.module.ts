import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolictsPageRoutingModule } from './policts-routing.module';

import { PolictsPage } from './policts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolictsPageRoutingModule
  ],
  declarations: [PolictsPage]
})
export class PolictsPageModule {}
