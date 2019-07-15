import { Injectable } from "@angular/core";
import { HttpHandler, HttpEvent, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { AuthenticationService } from '@app/_service';
import { Observable } from 'rxjs';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic auth credentials if available
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.authdata) {
            request = request.clone({
                setHeaders: {
                    authorization: `Basic ${currentUser.authdata}`
                }
            });
        }

        return next.handle(request);
    }
}