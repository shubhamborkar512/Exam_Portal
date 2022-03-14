import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { authInterceptorProviders } from './services/Auth.Interceptro';
import { DashboardComponent } from './components/pages/admin/dashboard/dashboard.component';
import { UserdashboardComponent } from './components/pages/user/userdashboard/userdashboard.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { SidebarComponent } from './components/pages/admin/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list';
import { WelcomeComponent } from './components/pages/admin/welcome/welcome.component';
import { ViewCategoryComponent } from './components/pages/admin/view-category/view-category.component';
import { AddcategoryComponent } from './components/pages/admin/addcategory/addcategory.component';
import { ViewquizesComponent } from './components/pages/admin/viewquizes/viewquizes.component';
import { AddquizComponent } from './components/pages/admin/addquiz/addquiz.component';
import { MarkAsteriskDirective } from './directive/mark-asterisk.directive';
import { ViewQuizQuestionsComponent } from './components/pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddquestionComponent } from './components/pages/admin/addquestion/addquestion.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UsersidebarComponent } from './components/pages/user/usersidebar/usersidebar.component';
import { QuizesComponent } from './components/pages/user/quizes/quizes.component';
import { FullscreenComponent } from './components/pages/user/fullscreen/fullscreen.component';
import { StartExamComponent } from './components/pages/user/start-exam/start-exam.component';

import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    UserdashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoryComponent,
    AddcategoryComponent,
    ViewquizesComponent,
    AddquizComponent,
    MarkAsteriskDirective,
    ViewQuizQuestionsComponent,
    AddquestionComponent,
    UsersidebarComponent,
    QuizesComponent,
    FullscreenComponent,
    StartExamComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    CKEditorModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
