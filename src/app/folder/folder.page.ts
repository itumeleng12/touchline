import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public selectedIndex = 0;
  public appPages = [

    
    {
      title: 'Profile',
      url: 'profile',
      icon: 'person'
    },

    {
      title: 'Home',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'Get in Touch',
      url: 'contact',
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
    },
  
  ];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
