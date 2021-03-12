import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from './../../service/authenticate.service';
import { User } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: User;
  UserUsername: string;
  UserEmail: string;
  UserMobile: number;
  UserAddress: string;
  UserDob: string;

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService
  ) { }

  ngOnInit() {

    this.authService.user().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        this.UserEmail = res.email;
      }
    }, err => {
      console.log('err', err);
    })

  }

 
}
