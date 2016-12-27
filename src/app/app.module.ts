import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { ApiService } from './shared/api.service';
import { WordsComponent } from './words/words.component';
import { WordFormComponent } from './word-form/word-form.component';
import { CrocoSvgComponent } from './croco-svg/croco-svg.component';
import { RecentlyUsedWordsComponent } from './recently-used-words/recently-used-words.component';

export const firebaseConfig = {
	apiKey: ' AIzaSyCp_jGuzcDi6vzvzcT4B2XZHlVcew_Y0rg',
	authDomain: "croco-feff1.firebaseapp.com",
	databaseURL: "https://croco-feff1.firebaseio.com",
	storageBucket: "croco-feff1.appspot.com",
	messagingSenderId: "300205376501"
};

@NgModule({
	declarations: [
		AppComponent,
		WordsComponent,
		WordFormComponent,
		CrocoSvgComponent,
		RecentlyUsedWordsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AngularFireModule.initializeApp(firebaseConfig)
	],
	providers: [ApiService],
	bootstrap: [AppComponent]
})
export class AppModule { }
