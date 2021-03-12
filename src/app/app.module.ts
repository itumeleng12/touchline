import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FolderPage } from './folder/folder.page';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';





@NgModule({
  declarations: [AppComponent, FolderPage],
  entryComponents: [],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, HttpClientModule,
    IonicModule.forRoot(),AngularFireAuthModule,AngularFirestoreModule, AngularFireModule.initializeApp(environment.firebase)    ,
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
 
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
