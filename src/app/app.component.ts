import { Component, OnInit } from '@angular/core';  
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';  
import {CommonService} from './common.service';  
import {paraminput} from "../app/paraminput"
   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
import { pipeBind1 } from '@angular/core/src/render3';
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  


export class AppComponent {  
    
     
  constructor(private newService :CommonService,) {   }  
   Repdata;  
   searchdata;
   valbutton ="Save";  
   sbutton = "Search";
   
   
   
   
ngOnInit() {    
  this.newService.GetUser().subscribe(
    
    data =>  this.Repdata = data
  )  
  
}  
  
onSave = function(user,isValid: boolean) {    
 user.mode= this.valbutton;  
  this.newService.saveUser(user)  
  .subscribe(data =>  {  alert(data.data);  
       
    this.ngOnInit();    
    this.cate="";
     this.ques="";
  this.opt1="";
  this.opt2=""; 
  this.opt3="";
  this.opt4="";
  this.answer="";

  }   
  , error => this.errorMessage = error )  
    
}      
edit = function(kk) {  
this.id = kk._id;  
this.cate=kk.cate;
this.ques=kk.ques;
this.opt1=kk.opt1;
this.opt2=kk.opt2; 
this.opt3=kk.opt3;
this.opt4=kk.opt4;
this.answer=kk.answer;
this.valbutton ="Update";  
}  
  
delete = function(id) {  
  console.log("component delete id :"+id);
this.newService.deleteUser(id)  
.subscribe(data =>   { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )   
}  

onSearch=function(){
  console.log("this is comp ts");
   let id=101;
  
   this.pi1.id='52';
   this.pi1.mbno='5698';

   this.newService.searchUser(this.pi1).subscribe(
    
    data =>  data = data
  )  
    console.log("common data :");

 }
  
}  