import { Injectable, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import { Word } from '../word.model';

@Injectable()
export class ApiService {
	ids: string[];
	count: number;
	constructor(private af: AngularFire,
		private http: Http) {
		this.getIds();
	}

	getRandomWordObservable() {
		let randomKey = this.ids[Math.ceil(Math.random() * this.count)];
		let ref = this.af.database.list('/words', {
			query: {
				startAt: randomKey,
				limitToFirst: 1,
				orderByKey: true,
			}
		});
		return ref.map(res => new Word(res[0]));
	}

	getWords() {
		return this.af.database.list('words');
	}

	getIds() {
		this.http.get('https://croco-feff1.firebaseio.com/words.json?shallow=true')
			.map(res => Object.keys(res.json()))
			.subscribe(
			ids => {
				this.ids = ids;
				this.count = ids.length;
			});
	}
}