import { Component, Input } from '@angular/core';
import { IViewItem } from '../model/views.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  @Input() items_list: IViewItem[] = [];
}
