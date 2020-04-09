import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users = []
  constructor() {
    let user = {
      userId:1,
      email:'aravinth@aravinth.com',
      password:'1'
    }
    this.users.push(user)
   }
  getUserByEmailAndPassword(email,password){
    let user = null;
    this.users.forEach(u=>{
      if(u.email === email && u.password === password){
        user = u;
      }
    })
    return user
  }
}
