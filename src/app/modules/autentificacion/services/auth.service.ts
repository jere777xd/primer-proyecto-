import { Injectable } from '@angular/core';
//servicio en la nube de autentificacion de Firebase
import { AngularFireAuth } from '@angular/fire/compat/auth'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //referenciar Auth de Firebase en el servicio
  constructor(public auth: AngularFireAuth) {  }

  //FUNCION PARA REGISTRO
  //retorna el valor creado con el metodo "createEmail..."
  registrar(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email, password);
  }
  //FUNCION PARA INICIO DE SESION 
  iniciarSesion(email: string, password: string){
    //validar la informacion del usuario -> saber si existe en la colecion
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  //FUNCION PARA CERRAR SESION
  cerrarSesion(){
    //devuelve una promesa vacia -> quita token
    return this.auth.signOut();
  }


  //FUNCION PARA TOMAR EL UID
}
