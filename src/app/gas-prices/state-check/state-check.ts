import {Component, EventEmitter, input, Output} from '@angular/core';
import {State} from '../../data/States';
import {MatCheckbox} from '@angular/material/checkbox';

@Component({
  selector: 'app-state-check',
  imports: [
    MatCheckbox
  ],
  templateUrl: './state-check.html',
  standalone: true,
  styleUrl: './state-check.scss'
})
export class StateCheck {
  public readonly state = input.required<State>();
  @Output() enable = new EventEmitter<string>();
  @Output() disable = new EventEmitter<string>();

  protected change(checked: boolean){
    if(checked){
      this.enable.emit(this.state().id);
    }else{
      this.disable.emit(this.state().id);
    }
  }
}
