import { Component, Input } from '@angular/core';
import { IStat, IViewItem } from '../model/views.model';
import { IItems } from '../../mods/model/mods.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  @Input() data: IStat[] =[];
}
