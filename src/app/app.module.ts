import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//COMPONENTES GLOBALES
import { SharedModule  } from './modules/shared/shared.module';

//FIREBASE -> importamos HERRAMIENTAS de la base de datos
import { environment } from 'src/environments/environment'; //vincula la BD con la app
import { AngularFireModule } from '@angular/fire/compat'; //trabaja con las colecciones de informacion
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; //trabaja con la autentificacion
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; //trabaja con imagenes y archivos 

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //IMPORTAR SHARED
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
