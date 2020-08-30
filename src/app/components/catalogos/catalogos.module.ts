import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CatalogosRoutingModule } from './catalogos-routing.module';
import { ReactiveForms } from './reactiveForms/reactiveforms.component';

// Clases 
import { Deleteuser, IdeleteUserFactory } from '../../@core/clases/reactive-form-users/deleteuser';
import { ICreateUserFactory, CreateUser } from '../../@core/clases/reactive-form-users/create-user';
import { IUpdateFactory, UpdateUser } from '../../@core/clases/reactive-form-users/update-user';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon'
import { MatCheckboxModule } from '@angular/material/checkbox';

// services
import { UserTypeService } from '../../@core/services/user-type.service';
import { CrudDialogComponent } from './reactiveForms/crud-dialog/crud-dialog.component';

@NgModule({
  declarations: [ReactiveForms, CrudDialogComponent],
  imports: [
    CommonModule,
    CatalogosRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule
  ],
  exports: [ReactiveForms, MatTableModule, CrudDialogComponent],
  entryComponents: [CrudDialogComponent],
  providers: [UserTypeService,
    {
      provide: IdeleteUserFactory,
      useValue: Deleteuser
    },
    {
      provide: ICreateUserFactory,
      useValue: CreateUser
    },
    {
      provide: IUpdateFactory,
      useValue: UpdateUser
    }
  ]
})
export class CatalogosModule { }
