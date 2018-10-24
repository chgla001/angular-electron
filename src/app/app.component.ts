import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private _electronService: ElectronService) {

  }

  launchWindow() {
    this._electronService.shell.openExternal('http://info.cern.ch/');
  }
}
