import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2CompleterModule } from 'ng2-completer';

import { CellComponent } from './cell.component';
import {
  CustomEditComponent,
  DefaultEditComponent,
  EditCellComponent,
} from './cell-edit-mode';
import {
  CheckboxEditorComponent,
  CompleterEditorComponent,
  InputEditorComponent,
  SelectEditorComponent,
  TextareaEditorComponent,
} from './cell-editors';
import {
  CustomViewComponent,
  ViewCellComponent,
} from './cell-view-mode';

const CELL_COMPONENTS = [
  CellComponent,
  CustomEditComponent,
  DefaultEditComponent,
  EditCellComponent,
  CheckboxEditorComponent,
  CompleterEditorComponent,
  InputEditorComponent,
  SelectEditorComponent,
  TextareaEditorComponent,
  CustomViewComponent,
  ViewCellComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2CompleterModule,
  ],
  declarations: [
    ...CELL_COMPONENTS,
  ],
  exports: [
    ...CELL_COMPONENTS,
  ],
})
export class CellModule { }
