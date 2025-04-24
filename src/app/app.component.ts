import { Component, OnDestroy, OnInit } from '@angular/core';
import { ElectronService } from './services/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private electronService: ElectronService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
