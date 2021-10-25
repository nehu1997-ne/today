import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UregistrationComponent } from './components/uregistration/uregistration.component';
import { UlistComponent } from './components/ulist/ulist.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    UregistrationComponent,
    UlistComponent,
 
  
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TooltipModule.forRoot(),
    NgxMaskModule.forRoot(),
    InternationalPhoneNumberModule,
    ReactiveFormsModule,
    FormsModule,
    // FontAwesomeModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
