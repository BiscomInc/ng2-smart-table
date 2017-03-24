import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2CompleterModule } from 'ng2-completer';

import { FilterComponent } from './filter.component';
import {
  CheckboxFilterComponent,
  CompleterFilterComponent,
  InputFilterComponent,
  SelectFilterComponent,
} from './filter-types';

const FILTER_COMPONENTS = [
  FilterComponent,
  CheckboxFilterComponent,
  CompleterFilterComponent,
  InputFilterComponent,
  SelectFilterComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2CompleterModule,
  ],
  declarations: [
    ...FILTER_COMPONENTS,
  ],
  exports: [
    ...FILTER_COMPONENTS,
  ],
})
export class FilterModule { }
