import {Component, input} from '@angular/core';
import {GasStationDTO} from '../../dto/GasStationDTO';
import {MatDivider} from '@angular/material/divider';
import {MatList, MatListItem, MatListItemLine, MatListItemTitle} from '@angular/material/list';

@Component({
  selector: 'app-gas-station-list',
  imports: [
    MatDivider,
    MatList,
    MatListItem,
    MatListItemLine,
    MatListItemTitle
  ],
  templateUrl: './gas-station-list.html',
  styleUrl: './gas-station-list.scss'
})
export class GasStationList {
  gasStations = input.required<GasStationDTO[]>();
}
