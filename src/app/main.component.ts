import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { name, patterns, layouts, routes, baseURL } from '../data';

@Component({
  selector: 'qs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  baseURL: String;

  constructor(private _router: Router) {
    Object.assign(this, { name, patterns, layouts, routes, baseURL });
  }
}
