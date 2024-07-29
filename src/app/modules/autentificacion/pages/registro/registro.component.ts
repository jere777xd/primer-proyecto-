import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
//impotamos servicio de autentificacion
import { AuthService } from '../../services/auth.service';
//impotamos servicio de firestore
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
//impotamos componentes de rutas de angular
import { Router } from '@angular/router';

// importamos paqueteria de incriptacion
import * as CryptoJS from 'crypto-js';

//paqueteria de alertas personalizadas 
import Swal from 'sweetalert2';

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
    public servicioFirestore: FirestoreService,
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
      Swal.fire({
        title: "¡buen trabajo!",
        text: "¡se pudo registrar con exito!",
        icon: "success"
      });

      // el metodo NAVIGATE nos redirecciona a otra vista
      this.servicioRutas.navigate(['/inicio']);
    })
    // el metodo catch captura una falla y la vuelve error cuando la promesa salga mal
    .catch(error =>{
      Swal.fire({
        title: "¡ocurrio un error!",
        text: "¡hubo un error al registrar un nuevo usuario! \n"+error,
        icon: "success"
      })
      
    })

    //constante UID captura el identificado de la BD
    const uid = await this.servicioAuth.obtenerUid();

    // se le asegina al atributo de la interfaz esta constante 
    this.usuarios.uid = uid;

    //llamamos a la funcion guardUsuario()

    /**
     * SHA es un algoritmo de hash seguro que toa una entrada (en este caso la contraseña)
     * y produce una cadena de caracteres HEXADECIMAL que va a representar a u hash
     * toString: convierte el resultado en la cadena de caracteres legible 
     */
    this.usuarios.password = CryptoJS.SHA256(this.usuarios.password).toString();

    this.guardarUsuario();
    


    //enviamos la nueva informacion como un NUEVO OBJETO a la coleccion de usuarios
    //this.coleccionUsuarios.push(credenciales)

    //notificamos el exito al usuario
    

    //llaman a la funcion limpiarInputs para ejecutarla
    this.limpiarInputs();


    
    //mostramos credenciales por consola
    console.log(credenciales);
    console.log(this.coleccionUsuarios);
  }

  /*Funcion que accede a servicio Firestore y envia la informacion
  agrega junto al UID
  */

  async guardarUsuario(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res=> {
      console.log(this.usuarios);
    })
    .catch(err=> {
      console.log('Error => ', err);
    })
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


