import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TdMediaService } from '@covalent/core/media';

@Component({
  selector: 'qs-creation-flow',
  templateUrl: './creation-over.component.html',
  styleUrls: ['./creation-over.component.scss'],
})
export class CreationOverComponent implements OnInit {

  constructor(private _titleService: Title,
              public media: TdMediaService) {
  }

  ngOnInit(): void {
    this._titleService.setTitle('Creation Flow');
  }
}