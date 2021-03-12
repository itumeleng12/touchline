// register.page.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from './../../service/authenticate.service';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  validation_messages = {
    'name': [
      { type: 'required', message: 'Usernames are required.' },
      { type: 'pattern', message: 'Enter valid names.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'dob':[
      {type: 'required', message: 'Date Of Birth is required'}
    ],
    'address': [
      { type: 'required', message: 'Address is required.' },
      { type: 'pattern', message: 'Enter a valid home address.' }
    ],

    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ],
    'mobile': [
      { type: 'required', message: 'Mobile number is required.' },
      { type: 'pattern', message: 'Enter valid numbers.' }
    ]
  };

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore,

  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
        dob: [''],
      
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
      address:[''],
      
	  mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]

    });
  }
getDate(e) {
      let date = new Date(e.target.value).toISOString().substring(0, 10);
      this.validations_form.get('dob').setValue(date, {
        onlyself: true
      })
    }
	
  tryRegister(value) {
    this.authService.registerUser(value)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.successMessage = "Your account has been created. Please log in.";
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      })
  }

  goLoginPage() {
    this.navCtrl.navigateBack('');
  }


}
