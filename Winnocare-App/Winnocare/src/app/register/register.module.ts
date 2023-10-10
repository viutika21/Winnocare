import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { StorageService } from '../services/storage.service';
import { EmergencyContactsComponent } from './emergency-contacts/emergency-contacts.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { RegisterRoutingModule } from './register-routing.module';


@NgModule({
  declarations: [PersonalDetailsComponent, EmergencyContactsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterRoutingModule,
    TranslateModule.forChild()
  ],
  providers: [StorageService]
})
export class RegisterModule { }
