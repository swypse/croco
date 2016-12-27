import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Word } from "./word.model";
import { ApiService } from "./shared/api.service";
import './rxjs-operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [
		'./app.component.css'
	],
	providers: []
})
export class AppComponent {
	word: Word = new Word({ content: "Waiting for a word" });
	constructor(private api: ApiService) { }

	button() {
		this.getWord();
	}

	getWord(): void {
		this.api.getRandomWordObservable()
			.subscribe(
			(word: Word) => {
				this.word = word;
			},
			error => console.error(error)
			);
	}
}