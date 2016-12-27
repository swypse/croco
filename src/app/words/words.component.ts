import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
	selector: 'app-words',
	templateUrl: './words.component.html',
	styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
	words;
	constructor(private api: ApiService) { }

	ngOnInit() {
		this.words = this.api.getWords();
	}

}
