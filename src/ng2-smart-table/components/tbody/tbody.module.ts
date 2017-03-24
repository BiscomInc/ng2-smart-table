import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CellModule } from '../cell/cell.module';

import { TbodyCreateCancelComponent, TbodyEditDeleteComponent } from './cells';
import { Ng2SmartTableTbodyComponent } from './tbody.component';

const TBODY_COMPONENTS = [
  TbodyCreateCancelComponent,
  TbodyEditDeleteComponent,
  Ng2SmartTableTbodyComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CellModule,
  ],
  declarations: [
    ...TBODY_COMPONENTS,
  ],
  exports: [
    ...TBODY_COMPONENTS,
  ],
})
export class TBodyModule { }
