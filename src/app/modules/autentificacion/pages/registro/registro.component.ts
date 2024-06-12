import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
//impotamos servicio de autentificacion
import { AuthService } from '../../services/auth.service';
//impotamos componentes de rutas de angular
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //input de la contraseña para ver los caracteres o no
  hide = true;

  //IMPORTAR LA INTERFAZ DE USUARIO -> INICIALIZAR
  usuarios: Usuario = {
    uid: '', // -> inicializamos con comillas simples porque es STRING
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }

  //CREAMOS COLECCION DE USUARIOS, TIPO 'USUARIO' PARA ARRAYS
  coleccionUsuarios: Usuario[] = [];
  //########################################### fin importaciones

  constructor(
    public servicioAuth: AuthService,
    public servicioRutas: Router
  ){}

  //FUNCION PARA EL REGISTRO DE NUEVOS USUARIOS
  async registrar() {
    //constante credenciales va a resguardar la informacion que ingrese el usuario
    /* ESTO ERA EL REGISTRO LOCAL
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }*/

    //REGISTRO CON SERVICIO
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }

    const res = await this.servicioAuth.registrar(credenciales.email, credenciales.password)
    // el metodo THEN es una promesa que devuelve el mismo valor si todo sale bien 
    .then(res => {
      alert("¡Se pudo registrar con exito!");

      // el metodo NAVIGATE nos redirecciona a otra vista
      this.servicioRutas.navigate(['/inicio']);
    })
    // el metodo catch captura una falla y la vuelve error cuando la promesa salga mal
    .catch(error =>{
      alert("Hubo un error al registrar un nuevo usuario \n"+error)
    })


    //enviamos la nueva informacion como un NUEVO OBJETO a la coleccion de usuarios
    //this.coleccionUsuarios.push(credenciales)

    //notificamos el exito al usuario
    alert("¡Te registraste con exito!")

    //llaman a la funcion limpiarInputs para ejecutarla
    this.limpiarInputs();


    
    //mostramos credenciales por consola
    console.log(credenciales);
    console.log(this.coleccionUsuarios);
  }

  //FUNCION PARA LIMPIAR INPUTS DEL FORMULARIO
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


