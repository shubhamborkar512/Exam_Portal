import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    username:'',
    password:''
  }

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.loginData.username==='' || this.loginData.username===null){
        Swal.fire({
          icon:'error',
          title:"Username Required!!!"
        })
        return;
    }
    if(this.loginData.password==='' || this.loginData.password===null){
      Swal.fire({
        icon:"error",
        title:"Password Required"
      })
      return;
    }

    // request to server to generate token
    this.loginService.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log(data);

        //login

        this.loginService.loginUser(data.token);

        this.loginService.getCurrentUser().subscribe(
          
          (user)=>{
            this.loginService.setUser(user);
            console.log(user);

            //redirect ...Admin:    amin:dashboard
            //redirect ...Normal: normal:dashboard
            
            if(this.loginService.getUserRole()=='admin'){
              //redirect to admin dashboard
              this.router.navigate(['admin'])
              this.loginService.loginStatusSubject.next(true);
            }
            else if(this.loginService.getUserRole()=='normal'){
              // redirect to user dashboard
              this.loginService.loginStatusSubject.next(true);
              this.router.navigate(['user'])
            }
            else{
              this.loginService.logout();
            }
          },
          (error)=>{
            Swal.fire({
              icon:"error",
              title:"Something Went Wring Try Again"
            })
          }
        );

      },
      (error)=>{
        console.log("error")
        console.log(error)
        Swal.fire({
          icon:'error',
          title:"Bad Credentials"
        })
        return;
      }
    )

  }

}
