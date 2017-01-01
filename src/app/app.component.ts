import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Word } from "./word.model";
import { ApiService } from "./shared/api.service";
import './rxjs-operators';
import { RecentlyUsedWordsService } from './recently-used-words/recently-used-words.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [
		'./app.component.css'
	],
	providers: [],
	outputs: ['loading']
})
export class AppComponent implements OnInit {
	word: Word = new Word({ content: "Waiting for a word" });
	loading: boolean = false;
	constructor(private api: ApiService,
		private recentlyService: RecentlyUsedWordsService) { }

	ngOnInit() {
		this.getWord();
	}

	button() {
		this.getWord();
	}

	getWord(): void {
		this.loading = true;
		this.api.getRandomWord()
			.subscribe(
			(word: Word) => {
				setTimeout(() => this.loading = false, 300);
				this.word = word;
				this.recentlyService.add(word);
			},
			error => {
				setTimeout(() => this.loading = false, 300);
				console.error(error)
			});
	}
}