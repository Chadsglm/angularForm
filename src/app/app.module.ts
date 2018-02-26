import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing/routing.module';
import { baseURL } from './shared/baseurl';
import { PersonService } from './services/person.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
         MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
         MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
         MatCardModule, MatIconModule, MatProgressSpinnerModule,
         MatDialogModule }          from '@angular/material';
import { EditComponent } from './edit/edit.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EditComponent,
    PersonDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
    MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
    MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
    MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule
  ],
  providers: [{ provide: 'BaseURL', useValue: baseURL },
              PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
