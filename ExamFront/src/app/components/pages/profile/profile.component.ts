import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public loginService:LoginService,private userService:UserService) { }
  
  public user:any
  ngOnInit(): void {
    this.user=this.loginService.getUser();
  }

  update(){
    let tempUser={
      id:this.user.id,
      username:this.user.username,
      firstName:this.user.firstName,
      lastName:this.user.lastName,
      email:this.user.email,
      phone:this.user.phone,
      profile:this.user.profile,
      password:this.user.password,
      enabled:true

    }
    this.userService.updateUser(tempUser).subscribe(
      (data)=>{
        this.user=data;

      },
      (error)=>{
        console.log(error)
       
      }
    )
    document.getElementById("updateButton")?.click();
  }

}
