import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from 'src/app/utils/route';
import { StorageService } from 'src/app/services/storage.service';

interface ButtonConfig {
  name: string;
  link: string;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  constructor(
    private router: Router,
    private storageService: StorageService,
  ) { }

  buttons: ButtonConfig[];

  get route() {
    return this.router.url;
  }

  ngOnInit() {
    this.buttons = [
      {
        name: 'Login',
        link: `/${Route.LOGIN}`,
      },
      {
        name: 'Registration',
        link: `/${Route.REGISTRATION}`,
      },
      {
        name: 'Add Offer',
        link: `/${Route.OFFER_FORM}`,
      },
      {
        name: 'Offers',
        link: `/${Route.OFFERS}`,
      },
      {
        name: 'User Profiles',
        link: `/${Route.PROFILES}`,
      },
      {
        name: 'Public Profiles',
        link: `/${Route.PUBLIC_PROFILES}`,
      },
      {
        name: 'Connections',
        link: `/${Route.CONNECTIONS}`,
      },
      {
        name: 'Connection Requests',
        link: `/${Route.CONNECTION_REQUESTS}`,
      },
      {
        name: 'Edit Profile',
        link: `/${Route.PROFILE_FORM}`,
      },
      {
        name: 'Notifications',
        link: `/${Route.NOTIFICATIONS}`,
      },
      {
        name: 'Logout',
        link: `/${Route.LOGIN}`,
      },
    ];
  }

  hiddenButton(button: ButtonConfig) {
    const route = this.route.substring(1);
    const link = button.link.substring(1);

    if (link === Route.PUBLIC_PROFILES) {
      return false;
    }

    const unAuthRoute = route === Route.LOGIN || route === Route.REGISTRATION || (route === Route.PUBLIC_PROFILES && !this.storageService.getAuth());
    if (button.name === 'Logout') {
      return unAuthRoute;
    }

    if (unAuthRoute) {
      return link !== Route.LOGIN && link !== Route.REGISTRATION && link !== Route.PUBLIC_PROFILES;
    }
    return link === Route.LOGIN || link === Route.REGISTRATION;
  }

}
