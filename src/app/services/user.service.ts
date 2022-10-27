import { Injectable } from '@angular/core';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser(): User {
    return {
      id: '1',
      firstName: 'Admin',
      lastName: 'User',
      username: 'admin',
      roles: ['admin', 'users']
    }
  }
}
