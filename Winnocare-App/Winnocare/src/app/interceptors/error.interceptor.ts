import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { Error } from "../model/error";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {

            let error: Error = new Error();
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.router.navigate(['login']);
            }

            if (err.status === 0) {
                error.errorMessage = err.statusText;
            } else {
                error.errorMessage = err.error;
            }
            error.errorStatus = err.status;
            return throwError(error);
        }))
    }
}