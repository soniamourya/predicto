import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule, MatInputModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class MaterialAppModule {
}
