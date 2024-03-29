import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './features/footer/footer.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { ComponentsModule } from './shared/components/components.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { interceptor } from './shared/interceptors/http-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    LazyLoadImageModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: interceptor,
    multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
