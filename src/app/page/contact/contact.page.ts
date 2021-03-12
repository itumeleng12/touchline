import {push} from 'ionicons/icons';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import  { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage  {

  constructor( @Inject(DOCUMENT) public document: Document) { }

 
goToUrl(){
  this.document.location.href='https://formkeep.com/p/579d89965fdcd37e3a4ebb04bff4b77a';

}

  }
