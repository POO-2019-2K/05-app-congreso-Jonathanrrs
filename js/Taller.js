export default class Taller {
    constructor(taller) {
        this._nomTaller = taller.nomTaller;
        this._fechaInicio = taller.fechaInicio;
        this._fechaTermino = taller.fechaTermino;
        this._lugaresDis = taller.lugaresDis;
        this._duracion = taller.duracion;
        this._meses = [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic"
        ];
    }

    get nomTaller() {
        return this._nomTaller;
    }
    get fechaInicio() {
        return this._fechaInicio;
    }
    get fechaTermino() {
        return this._fechaTermino;
    }
    get lugaresDis() {
        return this._lugaresDis;
    }
    get duracion() {
        return this._duracion;
    }

    getFechaInicio() {
        let fecha =
          this._fechaInicio.getDate() +
          "/" +
          this._meses[this._fechaInicio.getMonth()] +
          "/" +
          this._fechaInicio.getFullYear();
    
        return fecha;
    }

    getFechaTermino() {
        let fecha =
          this._fechaTermino.getDate() +
          "/" +
          this._meses[this._fechaTermino.getMonth()] +
          "/" +
          this._fechaTermino.getFullYear();
    
        return fecha;
    }

}