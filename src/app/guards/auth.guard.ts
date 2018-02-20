import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('running guard...');
    // inject: private activatedRoute: ActivatedRoute,

    // this.activatedRoute.params.subscribe(params => {
    //   if (+params['id']) {
    //     this.paramId = JSON.stringify(+params['id']);
    //   } else {
    //     // TODO: redirect
    //   }
    // });

    return true;
  }
}
