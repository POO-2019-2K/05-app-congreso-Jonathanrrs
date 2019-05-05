import Participante from "./Participante.js";

export default class AgendaPar {
    constructor(tablaAgendaPar) {
        this._tablaAgendaPar = tablaAgendaPar;
        this._participantes = [];
        this._initTables();
        
       
    }

    _initTables() {
        let participantes = JSON.parse(localStorage.getItem("participantes"));
        if(participantes === null) {
            return;
        }
        participantes.forEach((participante, index) => {
            participante.fechaNac = new Date(participante.fechaNac);
            this._showInTable(new Participante(participante));
        });
    }
    
    _showInTable(participante) {
        let row = this._tablaAgendaPar.insertRow(-1);

        let cellNomParticipante = row.insertCell(0);
        let cellCorreo = row.insertCell(1);
        let cellFechaNac= row.insertCell(2);

        cellNomParticipante.innerHTML = participante.nomParticipante;
        cellCorreo.innerHTML = participante.correo;
        cellFechaNac.innerHTML = participante.getFechaNac();

        let objParticipante = {
            nomParticipante: participante.nomParticipante,
            correo: participante.correo,
            fechaNac: participante.fechaNac
        }
        this._participantes.push(objParticipante);
    }
    addParticipante(participante) {
        this._showInTable(participante);
        localStorage.setItem("participantes", JSON.stringify(this._participantes));
    }

}