import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options={
  headers:new HttpHeaders
}


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  ondelete(event: any) {
    throw new Error('Method not implemented.');
  }
  currentemail: any;
  currentUser: any;
  // currentemail:any
  // currentUser:any
  
  

  constructor(private http:HttpClient) {
    this.getDetails()
   }
  saveDetails(){
    if(this.currentemail){
      localStorage.setItem("currentemail",JSON.stringify(this.currentemail))
    }
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
  }
  getDetails(){
    
    if(localStorage.getItem("currentemail")){
      this.currentemail=JSON.parse(localStorage.getItem("currentemail")||'')
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
    }
  }

  register(email:any,user:any,password:any){
    const data={
      email,
      user,
      password
    }
    console.log(data);
    
    return this.http.post('http://localhost:3000/register',data)
  }

  Login(email:any,password:any){
    const data={
      email,
      password
    }

    return this.http.post('http://localhost:3000/Login',data)
    }
    getOption(){
      const token =JSON.parse(localStorage.getItem("token")||'')
      let headers=new HttpHeaders()

      if (token){
        headers=headers.append('token',token)
        options.headers=headers
      }
      return options
    }

    addevent(email:any,date:any,description:any){
      const data={
        email,
        date,
        description
      }
  
      return this.http.post('http://localhost:3000/addevent',data,this.getOption())
      }
      event(email:any){
        const data={
          email
        }
    
        return this.http.post('http://localhost:3000/event',data,this.getOption())
          }

          
        onDelete(email:any){

          return this.http.delete('http://localhost:3000/ondelete/'+email,this.getOption())


        }

  
}


