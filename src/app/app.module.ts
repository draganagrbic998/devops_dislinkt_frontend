import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './utils/auth.interceptor';
import { FormComponent } from './components/utils/form/form.component';
import { SpinnerComponent } from './components/utils/spinner/spinner.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { OfferFormComponent } from './components/offer/offer-form/offer-form.component';
import { OfferListComponent } from './components/offer/offer-list/offer-list.component';
import { ListComponent } from './components/utils/list/list.component';
import { ProfileListComponent } from './components/profile/profile-list/profile-list.component';
import { ProfileFormComponent } from './components/profile/profile-form/profile-form.component';
import { NotificationListComponent } from './components/notification/notification-list/notification-list.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { EventListComponent } from './components/event/event-list/event-list.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatService } from './services/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SpinnerComponent,
    LoginComponent,
    RegistrationComponent,
    OfferFormComponent,
    OfferListComponent,
    ListComponent,
    ProfileListComponent,
    ProfileFormComponent,
    NotificationListComponent,
    ToolbarComponent,
    EventListComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    AppRoutingModule,
    MaterialModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    ChatService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
