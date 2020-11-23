import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';

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
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatBadgeModule,
    MatMenuModule,
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
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatBadgeModule,
    MatMenuModule,
  ]
})
export class MaterialModule {}
