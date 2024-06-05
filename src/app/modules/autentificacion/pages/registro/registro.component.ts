import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

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

  //FUNCION PARA EL REGISTRO DE NUEVOS USUARIOS
  registrar() {
    //constante credenciales va a resguardar la informacion que ingrese el usuario
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }

    //enviamos la nueva informacion como un NUEVO OBJETO a la coleccion de usuarios
    this.coleccionUsuarios.push(credenciales)

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


