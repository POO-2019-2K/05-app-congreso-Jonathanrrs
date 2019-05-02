import Taller from "./Taller.js";

export default class Agenda {
    constructor(tablaAgendaTaller) {
        this._tablaAgendaTaller = tablaAgendaTaller;
        this._talleres = [];
        this._initTables();
    }

    _initTables() {
        let talleres = JSON.parse(localStorage.getItem("talleres"));
        if(talleres === null) {
            return;
        }
        talleres.forEach((taller, index) => {
            taller.fechaInicio = new Date(taller.fechaInicio);
            taller.fechaTermino = new Date(taller.fechaTermino);
            this._showInTable(new Taller(taller));
        });
    }
    
    _showInTable(taller) {
        let row = this._tablaAgendaTaller.insertRow(-1);

        let cellNomTaller = row.insertCell(0);
        let cellFechaInicio = row.insertCell(1);
        let cellFechaTermino = row.insertCell(2);
        let cellLugaresDis = row.insertCell(3);
        let cellDuracion = row.insertCell(4);

        cellNomTaller.innerHTML = taller.nomTaller;
        cellFechaInicio.innerHTML = taller.getFechaInicio();
        cellFechaTermino.innerHTML = taller.getFechaTermino();
        cellLugaresDis.innerHTML = taller.lugaresDis;
        cellDuracion.innerHTML = taller.duracion;

        let objTaller = {
            nomTaller: taller.nomTaller,
            fechaInicio: taller.fechaInicio,
            fechaTermino: taller.fechaTermino,
            lugaresDis: taller.lugaresDis,
            duracion: taller.duracion
        }
        this._talleres.push(objTaller);
    }
    addTaller(taller) {
        this._showInTable(taller);
        localStorage.setItem("talleres", JSON.stringify(this._talleres));
    }

}