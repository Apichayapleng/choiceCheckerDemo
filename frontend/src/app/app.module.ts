import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {FormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularFontAwesomeModule,
    CarouselModule.forRoot(),
    FormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
