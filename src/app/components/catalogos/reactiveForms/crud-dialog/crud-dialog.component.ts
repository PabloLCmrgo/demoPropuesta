import { Component, OnInit, NgZone, Inject, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogData, UserTypeService, Router, MAT_DIALOG_DATA, MustMatch } from 'app/@core/index/user.index';
import { ICreateUserFactory, CreateUser } from '../../../../@core/clases/reactive-form-users/create-user';
import Swal from 'sweetalert2'

import { Deleteuser, IdeleteUserFactory } from 'app/@core/clases/reactive-form-users/deleteuser';
import { IUpdateFactory, UpdateUser } from '../../../../@core/clases/reactive-form-users/update-user';

@Component({
  selector: 'app-crud-dialog',
  templateUrl: './crud-dialog.component.html',
  styleUrls: ['./crud-dialog.component.scss']
})
export class CrudDialogComponent implements OnInit, AfterContentInit {
  public _createUser: CreateUser;
  public _deleteUser: Deleteuser;
  public _updateUser: UpdateUser;
  public isDisabled: boolean = false;
  constructor(public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA)
    public _dialogData: DialogData,
    public userService: UserTypeService,
    public ngZone: NgZone,
    public router: Router,
    CreateUser: ICreateUserFactory,
    DeleteUser: IdeleteUserFactory,
    UpdateUser: IUpdateFactory
  ) {
    this._deleteUser = new DeleteUser(userService);
    this._createUser = new CreateUser(userService);
    this._updateUser = new UpdateUser(userService);
  }

  registerForm: FormGroup;
  submitted = false;
  public ltsStatus: any[] = [];
  public ltsUserTypes: any[] = [];
  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('from afterContentInit');
    console.log(this.isDisabled);
    this.registerForm = this.formBuilder.group({
      userStatusId: [{ value: ''}, [Validators.required]],
      userTypeId: [{ value: ''}, [Validators.required]],
      userName: [{ value: ''}, [Validators.required]],
      email: [{ value: ''}, [Validators.required, Validators.email]],
      password: [{ value: ''}, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [{ value: ''}, [Validators.required]],
      userId: [{ value: ''}, [Validators.required]]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
    this.getUserStatus();
    this.getUserType();
    if (this._dialogData['res']) {
      this.setDataFromUpdateUserClass(this._dialogData['res'].data);
      this.isDisabled = true;
    }
  }

  resetFormFields() {
    this._createUser.onReset('registerForm');
  }
  getUserStatus() { //Obtener lista de estatus para el usuario
    this.userService.getUserStatus()
      .subscribe(
        (data) => { // success
          this.ltsStatus = data;
        },
        (error) => {
          console.error(error);
        }
      )
  }

  getUserType() { //Obtener lista de tipos de usuario
    this.userService.getUserType()
      .subscribe(
        (data) => { // success
          this.ltsUserTypes = data;
        },
        (error) => {
          console.error(error);
        }
      )
  }

  onSubmitFromCreateUser() {
    this._createUser.onSubmit(this.registerForm).then(res => {
      if (res.Result == "OK") {
        Swal.fire({
          icon: 'success',
          text: 'Se eliminó correctamente al usuario'
        });
        this._createUser.conectToUserService();
      } else if (res.Result == "ERROR") {
        Swal.fire({
          icon: 'error',
          title: 'Error al dar de alta usuario',
          text: res.data
        });
        return
      }
    })
  }

  setDataFromUpdateUserClass(userValues) {
    this.registerForm.patchValue(userValues);
  }

  updateDataFromUpdateUserClass() {
    this._updateUser.getUserUpdate(this.registerForm).then(res =>{
      if( res.Result =="OK" ){
        Swal.fire({
          icon: 'success',
          text: 'Se actualizó correctamente al usuario'
        });
      } else if(res.Result == "ERROR"){
        Swal.fire({
          icon: 'error',
          text: 'Ocurrió un error al actualizar el usuario'
        });
      }
    })
  }

  enableFormMeth() {
    this.isDisabled = false;
    this.registerForm.enable;
  }
  disableFormMeth(){
    this.isDisabled = true;
  }
  // convenience getter for easy access to form fields
  get getValidators() { return this.registerForm.controls; }



}
