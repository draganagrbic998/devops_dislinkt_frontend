import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { Role, Route } from './utils/route';
import { OfferFormComponent } from './components/offer/offer-form/offer-form.component';
import { OfferListComponent } from './components/offer/offer-list/offer-list.component';
import { ProfileListComponent } from './components/profile/profile-list/profile-list.component';
import { ProfileFormComponent } from './components/profile/profile-form/profile-form.component';
import { NotificationListComponent } from './components/notification/notification-list/notification-list.component';

const routes: Routes = [
  {
    path: Route.LOGIN,
    component: LoginComponent,
  },
  {
    path: Route.REGISTRATION,
    component: RegistrationComponent,
  },
  {
    path: Route.OFFER_FORM,
    component: OfferFormComponent,
    data: { roles: [Role.USER] },
  },
  {
    path: Route.OFFERS,
    component: OfferListComponent,
    data: { roles: [Role.USER] },
  },
  {
    path: Route.PROFILES,
    component: ProfileListComponent,
    data: { roles: [Role.USER] },
  },
  {
    path: Route.PUBLIC_PROFILES,
    component: ProfileListComponent,
  },
  {
    path: Route.CONNECTIONS,
    component: ProfileListComponent,
    data: { roles: [Role.USER] },
  },
  {
    path: Route.CONNECTION_REQUESTS,
    component: ProfileListComponent,
    data: { roles: [Role.USER] },
  },
  {
    path: Route.PROFILE_FORM,
    component: ProfileFormComponent,
    data: { roles: [Role.USER] },
  },
  {
    path: Route.NOTIFICATIONS,
    component: NotificationListComponent,
    data: { roles: [Role.USER] },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
