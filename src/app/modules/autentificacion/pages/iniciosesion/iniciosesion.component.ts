import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  hide = true;
  //#################### LOCAL
  //definimos coleccion local de usuarios
  public coleccionUsuariosLocales: Usuario[];

  constructor(){
    this.coleccionUsuariosLocales = [
      {
        uid: '',
        nombre: '',
        apellido: '',
        email: '',
        rol: '',
        password: ''
      },
      {
        uid: '',
        nombre: '',
        apellido: '',
        email: '',
        rol: '',
        password: ''
      },
      {
        uid: '',
        nombre: '',
        apellido: '',
        email: '',
        rol: '',
        password: ''
      }
    ]
  }
  //###################################### FIN LOCAL

  //###################################### INGRESADO
  //definimos laintefaz de usuario 
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }


  // funcion para iniciar sesion
  iniciarSesion(){
    // recibe la informacion ingresada desde el navegador
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }
    // repetitiva para recorrer la coleccion de ususarios locales
    for(let i = 0; i < this.coleccionUsuariosLocales.length; i++){
    // usuariosLocal corresponde a esa posicion en especifico
    const usuarioLocal = this.coleccionUsuariosLocales[i];

    // condicional para verificar la existencia del usuario ingresado
    if(usuarioLocal.nombre === )

  }
  } 

  

}
