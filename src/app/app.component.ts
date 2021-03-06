import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'td-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer) {
    this._iconRegistry.addSvgIconInNamespace('assets', 'teradata',
      // tslint:disable-next-line:max-line-length
      this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-resources/feat/sandbox/src/assets/icons/teradata.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'teradata-dark',
      // tslint:disable-next-line:max-line-length
      this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-resources/feat/sandbox/src/assets/icons/teradata-dark.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
      // tslint:disable-next-line:max-line-length
      this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-resources/feat/sandbox/src/assets/icons/covalent.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent-mark',
      // tslint:disable-next-line:max-line-length
      this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-resources/feat/sandbox/src/assets/icons/covalent-mark.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'github',
      // tslint:disable-next-line:max-line-length
      this._domSanitizer.bypassSecurityTrustResourceUrl('https://raw.githubusercontent.com/Teradata/covalent-resources/feat/sandbox/src/assets/icons/github.svg'));
  }
}
