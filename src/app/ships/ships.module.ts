import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShipsComponent } from './ships.component';
import { ShipsComponentRoutingModule } from './ships.routing.module';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShipsComponentRoutingModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [ShipsComponent]
})
export class ShipsPageModule {}
