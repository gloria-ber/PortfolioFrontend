export class Persona {
    id?: number;
    nombre: String;
    apellido: String;
    descripcion: String;
    banner: String;
    imagenPerfil: String;
    presentacion: String;

    constructor(nombre: String, apellido: String, descripcion: String, banner: String, imagenPerfil: String, presentacion: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.banner = banner;
        this.imagenPerfil = imagenPerfil;
        this.presentacion = presentacion;
    }
}