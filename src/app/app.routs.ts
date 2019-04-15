import { Routes } from '@angular/router';
import{AppComponent} from './app.component';
import{AdminComponent}from './admin/admin.component';
import{UserComponent}from './user/user.component';
export const Approute:Routes =[
    {
        path :  '',
        component : UserComponent
    },
    {
        path : 'admin',
        component : AppComponent
    } 
];
