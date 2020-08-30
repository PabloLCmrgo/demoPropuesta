import Swal from 'sweetalert2'
import { UserTypeService } from '../../index/user.index';

export interface IdeleteUserFactory {
    new ( usertypeService: UserTypeService ): Deleteuser;
}

export class IdeleteUserFactory implements IdeleteUserFactory{

}

export class Deleteuser {

    constructor(public userService: UserTypeService) {
     }

    deleteUser(idDelete, userName): Promise<any> {
        let promise = new Promise((resolve, reject) => {
            Swal.fire({
                title: `¿Desea eliminar al usuario ${userName}?`,
                icon: 'info',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:
                    'Eliminar',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                cancelButtonText:
                    'Cancelar',
                cancelButtonAriaLabel: 'Thumbs down'
            }).then((res) => {
                if (res.value) {
                    this.userService.DeleteUser(idDelete)
                        .subscribe(
                            (data) => { // success
                                resolve({ Result: "OK", data: data });
                            },
                            (error) => {
                                resolve({ Result: "ERROR", data: error });
                            }
                        );
                } else if (res.dismiss) {
                    let timerInterval
                    Swal.fire({
                        title: 'Regresando al catalogo',
                        timer: 1000,
                        timerProgressBar: true,
                        onBeforeOpen: () => {
                            Swal.showLoading()
                            timerInterval = setInterval(() => {
                            }, 100)
                        },
                        onClose: () => {
                            clearInterval(timerInterval)
                        }
                    });
                    return { Result: "CANCELED" };
                }

            });
        });
        return promise;
    }
}
