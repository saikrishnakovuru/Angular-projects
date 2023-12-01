import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ServerComponent} from "./server/server.component";
import {ExamBasics} from "./exam/exam.component";
import {TestNgForComponent} from "./ngForTest/ngForTest.component";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ExamBasics,
    TestNgForComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
