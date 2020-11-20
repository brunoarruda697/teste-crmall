import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    FormsModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    FormsModule,
    MatProgressSpinnerModule,
  ]
})
export class MaterialModule {}
