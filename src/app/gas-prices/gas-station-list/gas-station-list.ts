import {Component, input, signal} from '@angular/core';
import {GasStationDTO} from '../../dto/GasStationDTO';
import {MatDivider} from '@angular/material/divider';
import {MatList, MatListItem, MatListItemLine, MatListItemTitle} from '@angular/material/list';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription} from '@angular/material/expansion';
import {NgOptimizedImage} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-gas-station-list',
  imports: [
    MatDivider,
    MatList,
    MatListItem,
    MatListItemLine,
    MatListItemTitle,
    MatCard,
    MatCardHeader,
    MatCardSubtitle,
    MatCardContent,
    MatCardTitle,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    NgOptimizedImage,
    MatIcon,
  ],
  templateUrl: './gas-station-list.html',
  standalone: true,
  styleUrl: './gas-station-list.scss'
})
export class GasStationList {
  gasStations = input.required<GasStationDTO[]>();
}
