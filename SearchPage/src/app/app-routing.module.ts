import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropdownSplitComponent } from './dropdown-split/dropdown-split.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { AddSkillsToAssociateComponent } from './add-skills-to-associate/add-skills-to-associate.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import {HomeComponent} from './home/home.component';

import { from } from 'rxjs';
import { ImageComponent } from './image/image.component';
import { PasswordComponent } from './password/password.component';
import { SearchEmpComponent } from './search-emp/search-emp.component';
import { MailComponent } from './mail/mail.component';
import { DropdownEmpComponent } from './dropdown-emp/dropdown-emp.component';
import { SearchOwnComponent } from './search-own/search-own.component';

const routes: Routes = [
  {
    path: 'star/:id',
    component: StarRatingComponent,
    pathMatch:'full'
  },
  {
    path: 'star1/:id',
    component : SearchEmpComponent,
    pathMatch:'full'
  }, 
  {
    path: 'star2/:id',
    component : SearchOwnComponent,
    pathMatch:'full'
  },  
  {
    path: 'loginPage', 
    component: LoginPageComponent,
    pathMatch:'full'
  },
  {
    path: 'passwordPage', 
    component: PasswordComponent,
    pathMatch:'full'
  },
  {
    path: 'imagePage', 
    component: ImageComponent,
    pathMatch:'full'
  },
  {
    path:'mailPage',
    component:MailComponent,
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path: 'searchPage', 
    component: DropdownSplitComponent,
    pathMatch:'full'
  },
  // {
  //   path: 'searchPage/:uname', 
  //   component: DropdownSplitComponent,
  //   pathMatch:'full'
  // },
  {
    path: 'searchEmp', 
    component: DropdownEmpComponent,
    pathMatch:'full'
  },
  // {
  //   path: 'searchEmp/:uname', 
  //   component: DropdownEmpComponent,
  //   pathMatch:'full'
  // },
 {
        path: 'star/:id',
        component: StarRatingComponent,
        children: [
          {
            path: 'displaySkills/:id',
            component: AddSkillsComponent,
          }
        ]

      },
      {
        path: 'star1/:id',
        component: SearchEmpComponent,
        children: [
          {
            path: 'displaySkills/:id',
            component: AddSkillsComponent,
          }
        ]

      },
    
  
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
