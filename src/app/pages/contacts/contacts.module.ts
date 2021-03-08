import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContactsPageRoutingModule } from './contacts-routing.module';
import { ContactsPage } from './contacts.page';

// 1) Importa módulos de formularios reativos do Angular
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // 2) Importa módulo 
    ReactiveFormsModule,
    ContactsPageRoutingModule

    
  ],
  declarations: [ContactsPage]
})
export class ContactsPageModule {}
