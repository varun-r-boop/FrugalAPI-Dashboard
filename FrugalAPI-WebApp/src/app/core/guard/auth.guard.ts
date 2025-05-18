import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AUTHCONSTANT } from "../../features/constants/auth.constant";
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router
  )
  {

  }
  
  canActivate(): boolean {
    const token = window.localStorage.getItem(AUTHCONSTANT.FRUGALTOKEN);
    if(token === null)
        {
            this.router.navigate(['/login']);
            return false;
        }
    if(token) { 
         const payload = jwtDecode(token) as any;
         const expirationDate = new Date(payload.exp * 1000);
        const currentDate = new Date();
        if (expirationDate < currentDate) {
          localStorage.removeItem(AUTHCONSTANT.FRUGALTOKEN);
          this.router.navigate(['/login']);
          return false;
    }
  }
  return true
}
}