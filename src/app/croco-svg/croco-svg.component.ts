import { Component } from '@angular/core';

@Component({
	selector: 'app-croco-svg',
	templateUrl: './croco-svg.component.html',
	styleUrls: ['./croco-svg.component.css'],
	inputs: ['word']
})
export class CrocoSvgComponent {
	public word: string;
}
