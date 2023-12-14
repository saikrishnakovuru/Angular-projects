import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {BasicHighlightDirective} from "./basic-highlight/basic-highlight.directive";
import {BetterHighlightDirective} from "./better-highlight/better-highlight.directive";
import {UsingHostBindingDirective} from "./using-hostBinding/using-hostbinding.directive";
import {
  BindingToDirectivePropertiesDirective
} from "./binding-to-directive-properties/binding-to-directive-properties.directive";

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UsingHostBindingDirective,
    BindingToDirectivePropertiesDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
