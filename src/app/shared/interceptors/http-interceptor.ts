import { Injectable } from "@angular/core";
import { SpinnerService } from "../services/spinner.service";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";



@Injectable()
export class interceptor implements HttpInterceptor {


    constructor(
        private spinnerService: SpinnerService
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent> {
        this.spinnerService.requestStarted();
        return this.handler(next, request);
    }

    handler(next, request) {

    }
}
