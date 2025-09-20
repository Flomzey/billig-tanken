import {Component, inject, signal} from '@angular/core';
import {GasPricesApi} from './gas-prices-api';
import {MatDivider, MatList, MatListItem, MatListItemLine, MatListItemTitle} from '@angular/material/list';
import {GasStationDTO} from '../dto/GasStationDTO';
import {STATES} from '../data/States';
import {MatButton} from '@angular/material/button';
import {StateCheck} from './state-check/state-check';
import {lastValueFrom} from 'rxjs';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {GasStationList} from './gas-station-list/gas-station-list';

@Component({
  selector: 'app-gas-prices',
  imports: [
    MatList,
    MatListItem,
    MatDivider,
    MatListItemTitle,
    MatListItemLine,
    MatButton,
    StateCheck,
    MatRadioGroup,
    MatRadioButton,
    FormsModule,
    MatGridList,
    MatGridTile,
    GasStationList,
  ],
  templateUrl: './gas-prices.html',
  standalone: true,
  styleUrl: './gas-prices.scss'
})
export class GasPrices {
  gasPrices = inject(GasPricesApi);
  gasStations = signal<GasStationDTO[]>([]);
  code = signal('9');
  selectedIds = signal<string[]>([]);
  fuelType: string = "DIE";
  includeClosed: string = 'true';
  type: string = 'BL';
  protected readonly STATES = STATES.reverse();

  constructor() {
    this.getGasStations()
  }

  async getGasStations(): Promise<void> {
    const values:GasStationDTO[] = [];
    for(let id of this.selectedIds()){
      const data = await lastValueFrom(
        this.gasPrices.displayCheapest(
          id,
          this.fuelType,
          this.includeClosed,
          this.type
        )
      );
      for(let d of data){
        values.push(d);
      }
    }
    console.log(values)
    values.sort((a, b) =>
      a.prices[0].amount - b.prices[0].amount
    );
    this.gasStations.set(values);
  }

  addId(id: string){
    console.log("add")
    this.selectedIds.update(arr => [...arr, id]);
  }

  subId(id: string){
    console.log("sub")
    this.selectedIds.update(arr =>
      arr.filter(item => item !== id)
    );
  }
}
