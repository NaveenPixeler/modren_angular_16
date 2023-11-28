import { Component } from '@angular/core';
import { IStat, IViewItem } from './model/views.model';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css'],
})
export class ViewsComponent {
  stats: IStat[] = [
    {
      value: 20,
      label: '# of users',
    },
    {
      value: 120,
      label: 'Revenue',
    },
    {
      value: 190,
      label: 'Reviews',
    },
  ];

  items: IViewItem[] = [
    {
      image:
        'https://ii1.pepperfry.com/media/catalog/product/n/i/568x284/niki-3-seater-sofa-in-yellow-colour-by-febonic-niki-3-seater-sofa-in-yellow-colour-by-febonic-n7cixp.jpg',

      title: 'Couch',
      description: 'This is a soft couch!',
    },
    {
      image:
        'https://www.ikea.com/in/en/images/products/musken-wardrobe-with-2-doors-3-drawers-white__0650335_pe706131_s5.jpg',

      title: 'Wardrobe',
      description: 'This is a smart Wardrobe!',
    },
  ];
}
