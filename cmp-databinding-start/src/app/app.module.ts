import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {ServerElementComponent} from './server-element/server-element.component';
import {CockpitComponent} from "./cockpit/cockpit.component";
import { AsignmtGameControlComponent } from './asignmt-game-control/asignmt-game-control.component';
import { AsignmtEvenComponent } from './asignmt-even/asignmt-even.component';
import { AsignmtOddComponent } from './asignmt-odd/asignmt-odd.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerElementComponent,
    CockpitComponent,
    AsignmtGameControlComponent,
    AsignmtEvenComponent,
    AsignmtOddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
