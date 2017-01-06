import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Word } from "./word.model";
import { ApiService } from "./shared/api.service";
import './rxjs-operators';
import { RecentlyUsedWordsService } from './recently-used-words/recently-used-words.service';
import { RulesDialogComponent } from './rules-dialog/rules-dialog.component';

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
	word: Word = new Word({ content: "" });
	loading: boolean = false;
	app;
	rulesDialogRef: MdDialogRef<RulesDialogComponent>;
	constructor(
		private api: ApiService,
		public dialog: MdDialog,
		private recentlyService: RecentlyUsedWordsService) { }

	ngOnInit() {
		this.getWord();
		this.app = {
			title: "Слово для «Крокодила»",
		};
	}

	openRulesDialog() {
		this.rulesDialogRef = this.dialog.open(RulesDialogComponent, {
			disableClose: false
		});
	}

	getNewWord() {
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