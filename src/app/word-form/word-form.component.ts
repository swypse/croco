import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Word } from '../word.model';

@Component({
	selector: 'app-word-form',
	templateUrl: './word-form.component.html',
	styleUrls: ['./word-form.component.css']
})
export class WordFormComponent implements OnInit {
	word: Word;
	constructor(private api: ApiService) { }

	ngOnInit() {
		this.word = new Word({});
	}

}
