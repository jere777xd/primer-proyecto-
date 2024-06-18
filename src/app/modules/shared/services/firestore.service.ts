import { Injectable } from '@angular/core';
// cloud Firestore -> accedemos a las colecciones
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  /* Definimos de forma privada la coleccion de usuarios para que no sea accesible en toda 
  la aplicacion. Lo definimos como una coleccion de Firestore que respete la estructura 
  de muestra interfaz 'usuario'
  */
  private usuariosCollection: AngularFirestoreCollection<Usuario>

  constructor(private database: AngularFirestore){
    /* 
    usuariosCollection va a definir la nueva coleccion 'usuarios' que estara en nuestra
    base de datos
    */
    this.usuariosCollection = this.database.collection<Usuario>('usuarios');
  }

  agregarUsuario(usuario: Usuario, id: string){
    /*
     creamos una nueva promesa junto los metodos:
     RESOLVE: promesa resuelta -> funciona correcta 
     REJECT: promesa rechazada -> ocurrio una falla 

    */
    

    return new Promise(async (resolve, reject) => {
      // bloque try encapsula la logica RESUELTA 
      try {
        usuario.uid = id;

        /*
         * const resultado = colleccion de usuarios , envia como numero de documento el UID 
         * y setea la informacion que ingresamos en el formulario de REGISTRO 
        */

        const resultado = await this.usuariosCollection.doc(id).set(usuario);

        resolve (resultado);
        // bloque catch encapsula la logica rechazada
      } catch (error){
        // captura una falla y la vuelve un 'error'
        reject (error);
      }
    })

  }
}
