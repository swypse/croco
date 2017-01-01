import { Component, OnInit } from '@angular/core';
import { RecentlyUsedWordsService } from './recently-used-words.service';
import { Word } from '../word.model';

@Component({
	selector: 'app-recently-used-words',
	templateUrl: './recently-used-words.component.html',
	styleUrls: ['./recently-used-words.component.css']
})
export class RecentlyUsedWordsComponent {
	constructor(private recentlyService: RecentlyUsedWordsService) { }
	getWords() {
		return this.recentlyService.getRecentlyUsedWords().reverse();
	}

}
