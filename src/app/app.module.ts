import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/'; 
import { AngularFirestoreModule } from '@angular/fire/firestore'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartidaComponent } from './partida/partida.component';
var config= {
  apiKey: "AIzaSyAU_VZPWdY30B8XwcS4uO29cRTzqaMJ340",
  authDomain: "tic-tac-toe-b5e90.firebaseapp.com",
  databaseURL: "https://tic-tac-toe-b5e90-default-rtdb.firebaseio.com",
  projectId: "tic-tac-toe-b5e90",
  storageBucket: "tic-tac-toe-b5e90.appspot.com",
  messagingSenderId: "829197322708",
  appId: "1:829197322708:web:62d2d59ebd5d60d38eae41",
  measurementId: "G-97WVBKMXZ7"
};

@NgModule({
  declarations: [
    AppComponent,
    PartidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
