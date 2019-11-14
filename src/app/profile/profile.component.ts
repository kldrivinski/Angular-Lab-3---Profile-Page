import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service'
import { UserProfile } from '../user-profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfile: UserProfile;

  constructor(private profileSerivce: ProfileService) { }

  ngOnInit() {
    this.userProfile = this.profileSerivce.getUserProfile();
  }

}
