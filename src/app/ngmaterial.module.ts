import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule, MatInputModule, MatPaginator, MatToolbarModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class MaterialAppModule {
}
