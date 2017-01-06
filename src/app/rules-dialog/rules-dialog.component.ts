import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
	selector: 'app-rules-dialog',
	templateUrl: './rules-dialog.component.html',
	styleUrls: ['./rules-dialog.component.css']
})
export class RulesDialogComponent implements OnInit {

	constructor(public dialogRef: MdDialogRef<RulesDialogComponent>) { }
	ngOnInit() {
	}

}
