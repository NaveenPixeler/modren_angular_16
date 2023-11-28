import { Component, Input, OnInit } from '@angular/core';
import { IItems } from '../model/mods.model';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() items: IItems[] = [];
  openedIndex = 0;

  constructor() {}

  ngOnInit() {}

  onClick(index: number) {
    return this.openedIndex === index
      ? (this.openedIndex = -1)
      : (this.openedIndex = index);
    // this.openedIndex = index;
  }
}
