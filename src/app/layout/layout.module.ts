import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutCarouselComponent } from './layout-carousel/layout-carousel.component';
import { LayoutSmartphoneComponent } from './layout-smartphone/layout-smartphone.component';
import { LayoutLaptopComponent } from './layout-laptop/layout-laptop.component';
import { LayoutPromotionComponent } from './layout-promotion/layout-promotion.component';
import { LayoutListItemComponent } from './layout-list-item/layout-list-item.component';



@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutCarouselComponent,
    LayoutSmartphoneComponent,
    LayoutLaptopComponent,
    LayoutPromotionComponent,
    LayoutListItemComponent],
  // tslint:disable-next-line:max-line-length
  exports: [
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutCarouselComponent,
    LayoutSmartphoneComponent,
    LayoutLaptopComponent,
    LayoutPromotionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
