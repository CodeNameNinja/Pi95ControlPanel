import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersComponent } from './users.component';
import { UsersComponentRoutingModule } from './users.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersComponentRoutingModule
  ],
  declarations: [UsersComponent]
})
export class UsersComponentModule {}
