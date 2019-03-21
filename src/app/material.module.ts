import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

const MODULES = [
  MatFormFieldModule, MatInputModule,
  MatMomentDateModule, MatDatepickerModule, 
  MatButtonModule, MatCardModule,
  MatSelectModule,
];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class MaterialModule {}