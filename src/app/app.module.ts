import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';   
  
import { HttpModule } from '@angular/http';  
import { FormsModule } from '@angular/forms';  
  
import { AppComponent } from './app.component';  
  
import {CommonService} from './common.service';
import { AdminComponent } from './admin/admin.component';  
import{Approute}from './app.routs';
import{RouterModule}from '@angular/router';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component'

  
@NgModule({  
  declarations: [  
    AppComponent, AdminComponent, MainComponent, UserComponent  
  ],  
  imports: [  
    BrowserModule,HttpModule,FormsModule,
    RouterModule.forRoot(Approute) 
  ],  
  providers: [CommonService],  
  bootstrap: [MainComponent]  
})  
export class AppModule { }  
