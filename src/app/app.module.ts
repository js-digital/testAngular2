import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'


import { AppComponent } from './app.component';
import HeaderComponent from "./components/header/header.component";
import { NavComponent } from "./components/navigation/nav.component";
import { MyService } from "./shared/myService";
import CommentsComponent from "./components/comments/comments.component";
import {TodoComponent} from "./components/todo/todo.compoent";
import {ButtonComponent} from "./components/button/button.component";
import Accordion from "./components/accordion/accordion.component";
import {NgbdAlertSelfclosing} from "./components/alert/alert.component";
import Collapse from "./components/collapse/collapse.component";
import Dropdown from "./components/dropdown/dropdown.component";
import Popover from "./components/popover/popover.component";
import Tabs from "./components/tabs/tabs.component";











@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    CommentsComponent,
    TodoComponent,
    ButtonComponent,
    Accordion,
    NgbdAlertSelfclosing,
    Collapse,
    Dropdown,
    Popover,
    Tabs
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()

  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
