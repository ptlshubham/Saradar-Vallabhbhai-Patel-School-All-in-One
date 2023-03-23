import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KGComponent } from './kg/kg.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DepartmentRoutes } from './department.routing';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    KGComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(DepartmentRoutes),
    NgbModule,
    NgxPaginationModule
  ]
})
export class DepartmentModule { }
