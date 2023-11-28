import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { SharedModule } from 'src/app/shared/divider/shared.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { SegmentComponent } from './segment/segment.component';
import { TimesDirective } from './times.directive';

@NgModule({
  declarations: [
    ElementsHomeComponent,
    PlaceholderComponent,
    SegmentComponent,
    TimesDirective,
  ],
  imports: [CommonModule, ElementsRoutingModule, SharedModule],
  exports: [ElementsHomeComponent, PlaceholderComponent],
})
export class ElementsModule {}
