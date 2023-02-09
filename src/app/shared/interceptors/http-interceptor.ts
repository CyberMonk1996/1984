
import { Injectable } from "@angular/core";
import { SpinnerService } from "../services/spinner.service";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, pipe, tap } from "rxjs";



@Injectable()
export class interceptor implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.start();
    return this.handler(next, request);
  }

  handler(next: HttpHandler, request: HttpRequest<any>) {
    return next.handle(request).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            this.spinnerService.end();
          }
        },
        (error: HttpErrorResponse) => {
          throw error;
        }
      )
    )
  }
}
