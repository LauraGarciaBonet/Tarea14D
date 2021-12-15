import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionsModule } from './sections/sections.module';
import { PetsService } from './service/pets.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    SectionsModule,
    AppRoutingModule
  ],
  providers: [PetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
