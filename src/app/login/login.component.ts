import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=this.fb.group({
    email:["",[Validators.required,Validators.pattern('[0-9a-z@.A-Z ]*'),Validators.minLength(4)]],
    password:["",[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4)]]
  })


  constructor(private router: Router,private ds:ServiceService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  Login(){
    var email=this.loginForm.value.email
    var password=this.loginForm.value.password
    if(this.loginForm.value){
    this.ds.Login(email,password)
 
   .subscribe((result:any)=>{
    if (result){
      localStorage.setItem("currentemail",JSON.stringify(result.currentemail))
      localStorage.setItem("currentUser",JSON.stringify(result.currentUser))
      localStorage.setItem("token",JSON.stringify(result.token))



      alert(result.Message)
      this.router.navigateByUrl("dashboard")
    }
    },
    (result)=>{
      alert(result.error.Message )
  

   })
  }
  
     else{
       alert("invalid login")
     }  
}


}
