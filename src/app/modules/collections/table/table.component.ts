import { Component, Input } from '@angular/core';
import { IData, IHeaders } from '../collection-home/models/collection.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input('class') classNames = '';
  @Input() data: IData[]  = [];
  @Input() headers: IHeaders[] = [];

}
