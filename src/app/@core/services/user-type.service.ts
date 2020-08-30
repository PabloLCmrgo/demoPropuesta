import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
// interfaces
import { User } from '../../@core/interfaces/create-user';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {

  public URLBase = 'https://3.17.88.255:440/api/security/';

  constructor(public http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // POST
  createUser(data): Observable<User> {
    return this.http.post<User>(this.URLBase + 'user', JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  getUserType(): Observable<any> {//Obtener lista de tipos de usuario
    return this.http.get<any>(this.URLBase + 'usertype')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }
  getUserStatus(): Observable<any> { //Obtener lista de estatus del usuario
    return this.http.get<any>(this.URLBase + 'userstatus')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  getUserTable(cTable): Observable<any> { //Obtener data de la tabla
    return this.http.get<any>(this.URLBase + `user?page=${cTable[0].page}&size=${cTable[0].size}`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }
  getUser(id): Observable<any> { //Obtener data de la tabla
    return this.http.get<any>(this.URLBase + `user/${id}`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

    // DELETE
    DeleteUser(data){
      return this.http.delete<User>(this.URLBase + 'user/' + JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
    }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
