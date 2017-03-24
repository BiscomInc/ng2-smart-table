import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FilterModule } from '../filter/filter.module';
import { CellModule } from '../cell/cell.module';

import {
  ActionsComponent,
  ActionsTitleComponent,
  AddButtonComponent,
  CheckboxSelectAllComponent,
  ColumnTitleComponent,
  TitleComponent,
} from './cells';
import {
  TheadFitlersRowComponent,
  TheadFormRowComponent,
  TheadTitlesRowComponent,
} from './rows';
import { Ng2SmartTableTheadComponent } from './thead.component';

const THEAD_COMPONENTS = [
  ActionsComponent,
  ActionsTitleComponent,
  AddButtonComponent,
  CheckboxSelectAllComponent,
  ColumnTitleComponent,
  TitleComponent,
  TheadFitlersRowComponent,
  TheadFormRowComponent,
  TheadTitlesRowComponent,
  Ng2SmartTableTheadComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FilterModule,
    CellModule,
  ],
  declarations: [
    ...THEAD_COMPONENTS,
  ],
  exports: [
    ...THEAD_COMPONENTS,
  ],
})
export class THeadModule { }
