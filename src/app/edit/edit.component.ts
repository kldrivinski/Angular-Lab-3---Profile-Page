import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';
import { UserProfile } from '../user-profile';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  userProfile: UserProfile = { name: "", contact: "", bio: "" }

  constructor(private userProfileService: ProfileService,
    private router: Router) { }


  onSubmit(): void {
    this.userProfileService.setUserProfile(this.userProfile);
    this.router.navigate(["profile"]);

  }

  ngOnInit() {
  }

}
