import {Component, input} from '@angular/core';

@Component({
  selector: 'app-gas-station-list',
  imports: [],
  templateUrl: './gas-station-list.html',
  styleUrl: './gas-station-list.scss'
})
export class GasStationList {
  gasStations = input([]);

}
