import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { ProductComponent } from './product/product.component';
import { ValidateModalComponent } from './shared/validate-modal/validate-modal.component';

import { ChartModule } from 'angular2-chartjs';
import { AllProductComponent } from './all-product/all-product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewPageComponent } from './review/review.component';
import { ReviewFormPageComponent } from './review-form/review-form.component';
import { DeleteButtonComponent } from './review/components/delete-button/delete-button.component';
import { ArticleComponent } from './article/article.component';
import { AgmCoreModule } from '@agm/core';


// import {AccordionModule} from 'primeng/accordion';
// import {MenuItem} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material';
import {FormEmailComponent} from './form-email/form-email.component';
import {SkintypeQuestionComponent} from './skintype-question/skintype-question.component';
import {SkintypeQuestionDetailComponent} from './skintype-question-detail/skintype-question-detail.component';
import {TenyearQuestionComponent} from './tenyear-question/tenyear-question.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: AllProductComponent },
  { path: 'subproduct', component: ProductComponent },
  { path: 'about', component: AboutComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'review/:id', component: ReviewPageComponent },
  { path: 'form/review', component: ReviewFormPageComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProductComponent,
    AllProductComponent,
    AboutComponent,
    ContactComponent,
    ReviewPageComponent,
    ReviewFormPageComponent,
    DeleteButtonComponent,
    ValidateModalComponent,
    ArticleComponent,
    FormEmailComponent,
    SkintypeQuestionComponent,
    SkintypeQuestionDetailComponent,
    TenyearQuestionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgbPaginationModule,
    NgbAlertModule,
    AngularFontAwesomeModule,
    CarouselModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    AppRoutingModule,
    QuillModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    ChartModule,
    // AccordionModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBwNGRf5eXUpzvi75ZZwYNzY8Ef74RS608'
    }),
  ],
  // providers: [],
  entryComponents: [
    AppComponent,
    ValidateModalComponent,
    FormEmailComponent,
    SkintypeQuestionComponent,
    SkintypeQuestionDetailComponent,
    TenyearQuestionComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
