
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm=this.fb.group({
    email:["",[Validators.required,Validators.pattern('[0-9a-z@.A-Z ]*'),Validators.minLength(1)]],
    user:["",[Validators.required,Validators.pattern('[a-zA-Z]*'),Validators.minLength(1)]],
    password:["",[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(1)]]
  })
 

  constructor(private ds:ServiceService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
      



    var email=this.registerForm.value.email
    var user=this.registerForm.value.user
    var password=this.registerForm.value.password
    if(this.registerForm.valid){
    this.ds.register(email,user,password)
   .subscribe((result:any)=>{
    if (result){
      alert(result.Message)
      this.router.navigateByUrl("")
    }
    },
    (result)=>{
      alert(result.error.Message )
  

   })
  
  
    }
    else{
      alert("invalid form fuk u")
    }
  
  }
}

  
 
