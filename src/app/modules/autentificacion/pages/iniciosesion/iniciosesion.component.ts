import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

import { AuthService } from '../../services/auth.service';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  hide = true;
  //#################### LOCAL
  //definimos coleccion local de usuarios
  /*   public coleccionUsuariosLocales: Usuario[];

  constructor() {
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
  } */
  //###################################### FIN LOCAL

  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router
  ){}


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
  async iniciarSesion() {
   /*  // recibe la informacion ingresada desde el navegador
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }
    // repetitiva para recorrer la coleccion de ususarios locales
    for (let i = 0; i < this.coleccionUsuariosLocales.length; i++){
      // usuariosLocal corresponde a esa posicion en especifico
      const usuarioLocal = this.coleccionUsuariosLocales[i];

      // condicional para verificar la existencia del usuario ingresado
      if (usuarioLocal.nombre === credenciales.nombre &&
        usuarioLocal.apellido === credenciales.apellido &&
        usuarioLocal.email === credenciales.email &&
        usuarioLocal.rol === credenciales.rol &&
        usuarioLocal.password === credenciales.password){
          //notificampos al usuario que pudo ingresar
          alert("Ingresaste con exito");
          //paramos la funcion
          break;
        } else{
          alert("Ocurrio un problema al iniciar sesion");
          break;
        }
    } */
    
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }

    const res = await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.password)
    .then(res => {
      alert('¡Se pudo ingresar con exito!');

      this.servicioRutas.navigate(['/inicio']);
    })
    .catch(err=>{
      alert('Hubo un problema');

      this.limpiarInputs();
    })


    this.limpiarInputs();
  }
  //#################################################### FIN INGRESADO
  limpiarInputs() {
    const inputs = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = '',
      password: this.usuarios.password = ''
    }
  }



}
