import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
 providedIn: 'root'
})
export class CurrentUserService {

 user: User;

 constructor() { }

 setCurrentUser(user: User) {
   this.user = user;
   console.log('in currentuser service: ' + this.user);
 }

 getCurrentUser() {
   return this.user;
 }
}
