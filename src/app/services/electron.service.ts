import { Injectable } from '@angular/core';

import { ipcRenderer, webFrame } from 'electron';
import * as childProcess from 'child_process';
import * as fs from 'fs';

@Injectable({
  providedIn: 'root',
})
export class ElectronService {
  ipcRenderer!: typeof ipcRenderer;
  webFrame!: typeof webFrame;
  childProcess!: typeof childProcess;
  fs!: typeof fs;

  constructor() {
    if (this.isElectron) {
      this.ipcRenderer = (window as any).require('electron').ipcRenderer;
      this.webFrame = (window as any).require('electron').webFrame;
      this.fs = (window as any).require('fs');

      this.childProcess = (window as any).require('child_process');
    }
  }

  get isElectron(): boolean {
    return !!(window && window.process && window.process.type);
  }
}
