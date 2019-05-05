export default class Participante {
    constructor(participante) {
        this._nomParticipante = participante.nomParticipante;
        this._correo = participante.correo;
        this._fechaNac = participante.fechaNac;
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

    get nomParticipante() {
        return this._nomParticipante;
    }
    get correo() {
        return this._correo;
    }
    get fechaNac() {
        return this._fechaNac;
    }
  

    getFechaNac() {
        let fecha =
          this._fechaNac.getDate() +
          "/" +
          this._meses[this._fechaNac.getMonth()] +
          "/" +
          this._fechaNac.getFullYear();
    
        return fecha;
    }

    

}