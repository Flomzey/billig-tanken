import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GasPrices} from './gas-prices/gas-prices';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GasPrices, MatToolbar, MatIcon],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TankPreise');
}
