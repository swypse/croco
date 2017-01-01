import { Injectable, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import { Word } from '../word.model';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs';

@Injectable()
export class ApiService {
	ids;
	count: number;
	constructor(private af: AngularFire,
		private http: Http) { }


	getRandomWord() {
		return Rx.Observable.create(o => {
			this.getIds().subscribe(() => this._getRandomWord().subscribe(
				word => o.next(word),
				error => o.error(error)
			), error => o.error(error));
		});
	}

	private _getRandomWord() {
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
		return Rx.Observable.create(o => {
			if (this.ids && this.count) {
				o.next(this.ids);
			} else {
				this.http.get('https://croco-feff1.firebaseio.com/words.json?shallow=true')
					.map(res => Object.keys(res.json()))
					.subscribe(
					ids => {
						this.ids = ids;
						this.count = ids.length;
						o.next(this.ids);
					},
					error => o.error(error)
					);
			}
		});
	}
}