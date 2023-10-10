import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorBookingsComponent } from './doctor-bookings/doctor-bookings.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { LoginComponent } from './login/login.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';
import { MedicineTrackerComponent } from './medicine-tracker/medicine-tracker.component';
import { AuthenticationService } from './services/authentication.service';
import { LoadingService } from './services/loading.service';
import { StorageService } from './services/storage.service';
import { UserService } from './services/user.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SettingsComponent } from './settings/settings.component';
import { ConfigureSosComponent } from './configure-sos/configure-sos.component';
import {FoldingClothesComponent} from './folding-clothes/folding-clothes.component';
import { ColorModeService } from './services/color-mode.service';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import {FAQComponent} from './faq-module/faq-module.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DoctorBookingsComponent,
    MedicineDetailsComponent,
    MedicineTrackerComponent,
    ForgotPasswordComponent,
    SettingsComponent,
    ConfigureSosComponent,
    FoldingClothesComponent,
    FAQComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AppRoutingModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthGuard,
    AuthenticationService,
    StorageService,
    UserService,
    LoadingService,
    ColorModeService,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
