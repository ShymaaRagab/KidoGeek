import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userAuth = inject(UserAuthService);
  const router = inject(Router);
  if(userAuth.isLogged()){
    return true;
  }else{
    router.navigate(['/login'])
    return false;
  }
};
