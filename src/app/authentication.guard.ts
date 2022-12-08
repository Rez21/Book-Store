import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from './services/authguardServices/auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
constructor(private AuthguardService: AuthGuardService, private router:Router){}
canActivate(): boolean {  
  if (!this.AuthguardService.getToken()) {  
      this.router.navigateByUrl("/login");  
  }  
  return this.AuthguardService.getToken();  
}
  
}
