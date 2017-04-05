import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

/* Main Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* Core Module imports main services and common features that run at root level*/
import { CoreModule } from './core/core.module';

/* Feature modules */
import { FlightsModule } from './pages/flights/flights.module';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './widgets/app-header';
import { AppFooterComponent } from './widgets/app-footer';
import { MenuAsideComponent } from './widgets/menu-aside';
import { NotificationBoxComponent } from './widgets/notification-box';
import { UserBoxComponent } from './widgets/user-box';
import { BreadcrumbComponent } from './widgets/breadcrumb';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
export function createTranslateLoader( http: Http ) {
    return new TranslateStaticLoader( http, '../public/assets/i18n', '.json' );
}

let widgets = [
    AppComponent,
    BreadcrumbComponent,
    AppHeaderComponent,
    AppFooterComponent,
    MenuAsideComponent,
    NotificationBoxComponent,
    UserBoxComponent
];

@NgModule({
  declarations: [
    ...widgets
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FlightsModule,
    TranslateModule.forRoot({
        deps: [Http],
        provide: TranslateLoader,
        useFactory: (createTranslateLoader)
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
