import { Component, OnInit, AfterContentInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserTypeService } from '../../../@core/services/user-type.service';
import Swal from 'sweetalert2'
import { PageEvent } from '@angular/material/paginator';
import { Deleteuser, IdeleteUserFactory } from 'app/@core/clases/reactive-form-users/deleteuser';
import { CrudDialogComponent } from './crud-dialog/crud-dialog.component';
import { ICreateUserFactory, CreateUser } from '../../../@core/clases/reactive-form-users/create-user';
import { IUpdateFactory, UpdateUser } from '../../../@core/clases/reactive-form-users/update-user';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss']
})
export class ReactiveForms implements OnInit, AfterContentInit {
  displayedColumns: string[] = ['userId', 'userName', 'email', 'userStatus', 'delete', 'update'];
  public dataSource: [] = [];
  public ltsUsers: any[] = [];
  public CRUDvalue: string;
  public _createUser: CreateUser;
  public _deleteUser: Deleteuser;
  public _updateUser: UpdateUser;
  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  // MatPaginator Output
  public pageEvent: PageEvent;
  //public dialog: MatDialog;

  constructor(public userService?: UserTypeService,
              public dialog?: MatDialog,
              Deleteuser?: IdeleteUserFactory,
              CreateUser?: ICreateUserFactory,
              UpdateUser?: IUpdateFactory
              ) {
                this._deleteUser = new Deleteuser(userService);
                this._createUser = new CreateUser(userService);
                this._updateUser = new UpdateUser(userService);
  }

 
  ngOnInit() {
  }
  
  ngAfterContentInit() {
    this._createUser.conectToUserService().then(res =>{
      if( res.Result = "OK" ){
        this.ltsUsers = res.data.results;
      } else if (res.Result = "ERROR") {
        Swal.fire({
          icon: 'error',
          title: 'Ocurrió un problema, contacte con el técnico.',
          text: res.data
        });
      }
    })

  }
  deleteUserFromCatalogo(data) {
    this._deleteUser.deleteUser(data.userId, data.userName).then(result => {
      if (result.Result == "OK") {
        Swal.fire({
          icon: 'success',
          text: 'Se eliminó correctamente al usuario'
        });
        this._createUser.conectToUserService();
      } else if (result.Result == "ERROR") {
        Swal.fire({
          icon: 'error',
          text: 'Ocurrió un problema, contacte con el técnico.'
        });
      } else if (result == "CANCELED") {
        this._createUser.conectToUserService();
      }
    });
  }

 updateUserFromCatalogos(data){
    this._updateUser.consultAUser(data.userId).then(res => {
      if( res.Result == "OK" ) {
        const dialogRef = this.dialog.open(CrudDialogComponent, {
          data: {
            res
          }
        });
  
        dialogRef.afterClosed().subscribe(result => {
        }); 

      }
    });
  }


   createUser() {
       const dialogRef = this.dialog.open(CrudDialogComponent, {
        data: {
          actionToBeTaken: "si"
        }
      });

      dialogRef.afterClosed().subscribe(result => {
      }); 
  } 

}