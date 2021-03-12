import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormGroup, FormControl } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Profile',
      url: '/profile',
      icon: 'person'
    },

    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Get in Touch',
      url: '/contact',
      icon: 'mail'
    },
    {
      title: 'About Us',
      url: '/about',
      icon: 'information'
    },

    {
      title: 'Address',
      url: '/map',
      icon: 'location'
    },

    {
      title: 'LogOut',
      url: '/login',
      icon: 'log-out'
    }
  
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
