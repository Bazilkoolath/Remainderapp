import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  event:any
  email:any


  constructor(private ds:ServiceService) {
    this.email=JSON.parse(localStorage.getItem("currentemail")||'')
    // console.log(this.email)
    this.event=this.ds.event(this.email)
    .subscribe((result:any)=>{
      if(result){

        this.event=result.event
      }

    },
    (result)=>{
      alert(result.error.Message);
      
    })
    console.log(this.event);
    
   }
  ngOnInit(): void {
  }

}
