export interface Usuario {
    uid: string | any; //los atributos del tpio "any" reciben valores vacios o indefinidos
    nombre: string;
    apellido: string;
    email: string;
    rol: string;
    password: string;
}
