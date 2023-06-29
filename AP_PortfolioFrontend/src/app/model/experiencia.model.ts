export class Experiencia {
    id?: number;
    empresa: String;
    fechaInicio: String;    
    fechaFin: String;
    tareas: String;
    imagenEmpresa: String;

    constructor(empresa: String, fechaInicio: String, fechaFin: String, tareas: String, imagenEmpresa: String){
        this.empresa = empresa;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.tareas = tareas;
        this.imagenEmpresa = imagenEmpresa;
        
    }
}