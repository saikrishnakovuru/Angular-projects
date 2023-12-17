import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { ActiveUsersComponent } from './assignment/active-users/active-users.component';
import { InactiveUsersComponent } from './assignment/inactive-users/inactive-users.component';
import {ActiveInactiveUsersService} from "./assignment/service/ActiveInactiveUsersService";

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [ActiveInactiveUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
