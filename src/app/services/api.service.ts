import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';
import { OfferService } from './offer.service';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(
    public authService: AuthService,
    public profileService: ProfileService,
    public offerService: OfferService,
    public notificationService: NotificationService,
  ) { }
}