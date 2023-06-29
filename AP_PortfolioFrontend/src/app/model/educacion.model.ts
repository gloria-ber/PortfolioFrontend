export class Educacion {
    id?: number;
    institucion: String;
    titulo: String;    
    fechaEgreso: String;
    imagenInst: String;
    

    constructor(institucion: String, titulo: String, fechaEgreso: String, imagenInst: String, cargaHoraria: String){
        this.institucion = institucion;
        this.titulo = titulo;
        this.fechaEgreso = fechaEgreso;
        this.imagenInst = imagenInst;
        
        
    }
}