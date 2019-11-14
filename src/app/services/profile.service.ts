import { Injectable } from '@angular/core';
import { UserProfile } from '../user-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private userProfile: UserProfile = {
    name: "kelsey",
    contact: "don't",
    bio: "unavailable",

  }


  getUserProfile(): UserProfile {
    return this.userProfile;
  }

  setUserProfile(userProfile: UserProfile): void {
    this.userProfile = userProfile;
  }


  constructor() { }
}
