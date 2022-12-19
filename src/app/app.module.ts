import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NgxEditorModule} from "ngx-editor";
import { QnserHomeComponent } from './qnser-home/qnser-home.component';
import {FormsModule} from "@angular/forms";
import { QnserEditorComponent } from './qnser-editor/qnser-editor.component';
import {QuestionsComponent} from './qnser-issues/qnser-issues.component';
import { QnserUserComponent } from './qnser-user/qnser-user.component';
import { TestComponent } from './test/test.component';
import {HttpClientModule} from "@angular/common/http";
import { QnserIssueComponent } from './qnser-issue/qnser-issue.component';
import { QnserTagsComponent } from './qnser-tags/qnser-tags.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { UsersComponent } from './users/users.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QnserHomeComponent,
    QnserEditorComponent,
    QuestionsComponent,
    QnserUserComponent,
    TestComponent,
    QnserIssueComponent,
    QnserTagsComponent,
    SearchBoxComponent,
    UsersComponent,
    SignInComponent,
    ProfileSettingsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, NgxEditorModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
