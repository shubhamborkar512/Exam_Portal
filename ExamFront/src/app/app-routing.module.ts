import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcategoryComponent } from './components/pages/admin/addcategory/addcategory.component';
import { AddquestionComponent } from './components/pages/admin/addquestion/addquestion.component';
import { AddquizComponent } from './components/pages/admin/addquiz/addquiz.component';
import { DashboardComponent } from './components/pages/admin/dashboard/dashboard.component';
import { ViewCategoryComponent } from './components/pages/admin/view-category/view-category.component';
import { ViewQuizQuestionsComponent } from './components/pages/admin/view-quiz-questions/view-quiz-questions.component';
import { ViewquizesComponent } from './components/pages/admin/viewquizes/viewquizes.component';
import { WelcomeComponent } from './components/pages/admin/welcome/welcome.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { FullscreenComponent } from './components/pages/user/fullscreen/fullscreen.component';
import { QuizesComponent } from './components/pages/user/quizes/quizes.component';
import { StartExamComponent } from './components/pages/user/start-exam/start-exam.component';
import { UserdashboardComponent } from './components/pages/user/userdashboard/userdashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
const routes: Routes = [
  {
    path:"signup",
    component:SignupComponent,
    pathMatch:'full'
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:"admin",
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'',
        component:WelcomeComponent
      },
      {
        path:'categories',
        component:ViewCategoryComponent
      },
      {
        path:'addcategory',
        component:AddcategoryComponent
      },
      {
        path:'quizes',
        component:ViewquizesComponent
      },
      {
        path:'addquiz',
        component:AddquizComponent
      },
      {
        path:"quiz/questions/:qid",
        component:ViewQuizQuestionsComponent
      },
      {
        path:"quiz/questions/:qid/addquestion",
        component:AddquestionComponent
      }
    ]
  },
  {
    path:"user",
    component:UserdashboardComponent,
    canActivate:[NormalGuard],
    children:[
      {
        path:':category/:id/quizes',
        component:QuizesComponent
      },
      {
        path:':category/:id/quizes/instructions/:qId',
        component:FullscreenComponent
      }
    ]
  },
  {
    path:':qId/startexam',
    component:StartExamComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
