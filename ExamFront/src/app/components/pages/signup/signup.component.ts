import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user={
    username:"",
    password:"",
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
  }


  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.user.username===''){
      Swal.fire({
        icon:"question",
        title:"username is requeired"
      })
      return;
    }
      this.userService.addUser(this.user).subscribe(
        (response=>{
          document.getElementById("resetform")?.click();
          Swal.fire(
           {
             icon:'success',
             title:"Good Job",
             timer:2000
           }
          )
        }),
        (error=>{
          Swal.fire(
            {
              icon:'error',
              title:"Username already exists"
            }
          )
        })
      )

  }

}
