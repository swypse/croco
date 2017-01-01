import { Injectable } from '@angular/core';
import { LsService } from '../shared/ls.service';
import { Word } from '../word.model';

@Injectable()
export class RecentlyUsedWordsService {
	readonly LS_KEY = 'RECENTLY_USED_WORDS';
	constructor(private ls: LsService) { }

	add(word: Word): boolean {
		let words = this.getRecentlyUsedWords();
		words.push(word);
		let l = words.length,
			n = 10;
		if (l > n) {
			words = words.slice(l - n - 1, l);
		}
		return this.ls.set(this.LS_KEY, words);
	}

	getRecentlyUsedWords(): Word[] {
		let words = this.ls.get(this.LS_KEY) || [];
		return words;
	}
}