import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/app/login.service'
import { SessionService } from 'src/app/session.service';
import { RouteStateService } from 'src/app/route-state.service';
import {UserContextService} from 'src/app/user-context.service'
//import { ToastService } from 'src/services/toast.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,
              private sessionService: SessionService, 
              private  routeStateService: RouteStateService,
              private  userContextService: UserContextService) { }
  email: string;

  password: string;
  ngOnInit(): void {
  }
  onClickLogin(email,password){
    console.log(email);
    console.log(password);
    console.log("On click of login button");
    this.email = "aravinth@aravinth.com"
    this.password ="1"
   let user = this.loginService.getUserByEmailAndPassword(email,password)
   console.log(user)
   if(user){
     //logged in sucessfully
      this.userContextService.setUser(user);
      this.routeStateService.add("Dashboard", '/main/dashboard', null, true)
   }else{
     //Failed to logged in
   }
  }

}
