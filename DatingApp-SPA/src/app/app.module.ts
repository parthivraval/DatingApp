import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterCeptorProvider } from './_services/error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MemberListComponent } from './member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { appRoutes} from './routes';

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, RegisterComponent, MemberListComponent, ListsComponent, MessagesComponent],
  imports: [BrowserModule, CommonModule, HttpClientModule, FormsModule, BrowserAnimationsModule, BsDropdownModule.forRoot(), RouterModule.forRoot(appRoutes)],
  providers: [AuthService, ErrorInterCeptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
