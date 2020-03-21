import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PortsComponent } from './ports.component';
import { PortsComponentRoutingModule } from './ports.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PortsComponentRoutingModule
  ],
  declarations: [PortsComponent]
})
export class PortsComponentModule {}
