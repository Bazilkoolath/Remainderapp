import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  addForm=this.fb.group({
    email:["",[Validators.required,Validators.pattern('[0-9a-z@.A-Z ]*')]],
    date:["",[Validators.required]],
    description:["",[Validators.required,Validators.pattern('[0-9a-z@.A-Z ]*')]]
  })
  email: any;

  constructor(private ds:ServiceService , private fb:FormBuilder,private router: Router ) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem("currentaccnumber")
    localStorage.removeItem("currentUser")
    this.router.navigateByUrl("")

  }
  addevent(){
    
    var email=this.addForm.value.email
    var date=this.addForm.value.date
    var description=this.addForm.value.description
    if(this.addForm.valid){
      this.ds.addevent(email,date,description)
      .subscribe((result:any)=>{
        if(result){
          alert(result.Message)
        }

      },
      (result)=>{
        alert(result.error.Message);
        
      }
      )
     } 
     
     else{
       alert("event didn't added")

      
      
    }



  }
  deleteFunction(){
    this.email=JSON.parse( localStorage.getItem("currentemail")||"")
  }
  oncancel(){
    this.email =""
  }
  onDelete(event:any){
this.ds.onDelete(event)
    .subscribe((result:any)=>{
      if(result){
        alert(result.Message)
        this.router.navigateByUrl("")
      }

    },
    (result)=>{
      alert(result.error.Message);
      
    }
    )    }




}
