import { Deleteuser } from '../reactive-form-users/deleteuser';
import { UserTypeService, NgZone, Router } from '../../index/user.index';
import Swal from 'sweetalert2';
import { FormGroup } from '@angular/forms';
import { promise } from 'protractor';

export interface IUpdateFactory {
    new ( _usertype: UserTypeService ): UpdateUser;
}

export class IUpdateFactory implements IUpdateFactory {

}

export class UpdateUser extends Deleteuser {

    registerForm: FormGroup;
  constructor(userService: UserTypeService, public ngZone: NgZone, public router: Router) {
    super(userService);
  }

  ngOnInit() { }

  consultAUser(userId): Promise<any> {
      let promise = new Promise(resolve => {
    this.userService.getUser(userId)
      .subscribe(
        (data) => { // success
          resolve({
              Result: "OK", data: data
          })
        },
        (error) => {
            resolve({
                Result: "OK", data: error
            })
        });
    });
      return promise
  }

  getUserUpdate(registerForm): Promise<any> {
    let promise = new Promise(resolve => {
        this.userService.createUser(registerForm.value)
        .subscribe(
            (res) => {
                resolve({
                    Result: "OK", data: res
                });
            },
            (error) => {
                resolve({
                    Result: "OK", data: error
                });
            });
    });
    return promise
  }
}
