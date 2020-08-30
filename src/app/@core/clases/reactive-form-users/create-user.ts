import { MatDialog } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { UserTypeService, Router, NgZone, UserConfigTable } from '../../index/user.index';
import Swal from 'sweetalert2'

export interface ICreateUserFactory {
  new(usertypeService: UserTypeService): CreateUser;
}

export class ICreateUserFactory implements ICreateUserFactory { }

export class CreateUser {
  submitted = false;
  public dialog: MatDialog
  registerForm: FormGroup;
  public cTable: UserConfigTable[];
  constructor(
    public userService: UserTypeService,
    public ngZone: NgZone,
    public router: Router
  ) {
  }

  ngOnInit() {
  }

  conectToUserService(): Promise<any> {
    this.cTable = [{
      page: 1,
      size: 20
    }]
    let promise = new Promise(resolve => {
    this.userService.getUserTable(this.cTable)
      .subscribe(
        (data) => { // success
          resolve({
            Result: "OK", data: data
          });
        },
        (error) => {
          resolve({
            Result: "ERROR", data: error
          });
        });
    });
    return promise
  }


  onSubmit(registerForm): Promise<any> {
    let promise = new Promise((resolve) => {
      if (registerForm.status) {
        Swal.fire({
          icon: 'error',
          text: 'Un campo requerido no ha sido ingresado ',
        });
        return;
      } 
      this.submitted = true;
      registerForm.controls.userId.setValue(0);
      this.userService.createUser(registerForm.value)
      .subscribe(
        (res) => { // success
       resolve({ Result: "OK", data: res});
      }, (error) => {
        resolve({ Result: "ERROR", data: error })
      }
      );
    });
    return promise;
  }

  onReset(form) {
    this.submitted = false;
    `this.${form}.reset();`;
  }


} 