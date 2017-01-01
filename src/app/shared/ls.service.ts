import { Injectable } from '@angular/core';
import { Word } from '../word.model';

@Injectable()
export class LsService implements ILocalStorage {
	get(key: string): Word[] {
		return <Word[]>JSON.parse(localStorage.getItem(key));
	}

	set(key: string, value: Object): boolean {
		let json = JSON.stringify(value);
		localStorage.setItem(key, json);
		return true;
	}
}

interface ILocalStorage {
	get(key: string): any;
	set(key: string, value: any): boolean;
}