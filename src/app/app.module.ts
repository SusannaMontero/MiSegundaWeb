import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciComponent } from './inici/inici.component';
import { EventsComponent } from './events/events.component';
import { QuiSomComponent } from './qui-som/qui-som.component';
import { AltaEventComponent } from './alta-event/alta-event.component';
import { ModificarEventComponent } from './modificar-event/modificar-event.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IniciComponent,
    EventsComponent,
    QuiSomComponent,
    AltaEventComponent,
    ModificarEventComponent,
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
