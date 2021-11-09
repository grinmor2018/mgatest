import { AppComponent } from './app.component';
import { Approutes } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpaComponent } from './components/spa/spa.component';


@NgModule({
  declarations: [
    AppComponent,
    SpaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Approutes, { relativeLinkResolution: 'legacy' } ),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
