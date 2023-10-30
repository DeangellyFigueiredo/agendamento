import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OptionsComponent } from './options/options.component';
import { CardComponent } from './card/card.component';
import { DisplayService } from './display.service';
import { ScheduleComponent } from './schedule/schedule.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimelineComponent,
    OptionsComponent,
    CardComponent,
    ScheduleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [DisplayService],
  bootstrap: [AppComponent],
})
export class AppModule {}
