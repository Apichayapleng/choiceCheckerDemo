import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { ProductComponent } from './product/product.component';

import { ChartModule } from 'angular2-chartjs';
import { AllProductComponent } from './all-product/all-product.component';
// import {AccordionModule} from 'primeng/accordion';
// import {MenuItem} from 'primeng/api';     
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: AllProductComponent },
  { path: 'subproduct', component: ProductComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProductComponent,
    AllProductComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgbPaginationModule, 
    NgbAlertModule,
    AngularFontAwesomeModule,
    CarouselModule.forRoot(),
    FormsModule,
    NgSelectModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    ChartModule,
    // AccordionModule,
    // BrowserAnimationsModule,
  ],
  // providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
