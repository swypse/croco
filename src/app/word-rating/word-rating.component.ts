import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Word } from '../word.model';

@Component({
	selector: 'app-word-rating',
	templateUrl: './word-rating.component.html',
	styleUrls: ['./word-rating.component.css']
})
export class WordRatingComponent implements OnInit, OnChanges {
	@Input()
	word: Word;
	stars: number[];
	text: string;

	constructor() { }

	getStars() {
		let stars = Array(3).fill(0);
		for (let i = 0; i < this.word.level; i++) {
			stars[i] = 1;
		}
		return stars;
	}

	ngOnInit() {
		this.text = '...';
	}

	ngOnChanges(changes: any) {
		this.stars = this.getStars();
		this.text = this.getText();
	}
	private texts = [
		'Легко',
		'Средне',
		'Тяжело',
		'Зубодробительно'
	];

	getText() {
		return 'Сложность: ' + this.texts[this.word.level];
	}

}
