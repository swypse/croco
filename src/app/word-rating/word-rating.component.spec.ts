/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WordRatingComponent } from './word-rating.component';

describe('WordRatingComponent', () => {
  let component: WordRatingComponent;
  let fixture: ComponentFixture<WordRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
