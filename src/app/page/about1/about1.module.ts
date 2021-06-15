import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { About1PageRoutingModule } from './about1-routing.module';

import { About1Page } from './about1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    About1PageRoutingModule
  ],
  declarations: [About1Page]
})
export class About1PageModule {}
