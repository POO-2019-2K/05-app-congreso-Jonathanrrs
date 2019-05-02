import Agenda from "./Agenda.js";
import Taller from "./Taller.js";

class Main {
    constructor() {
        let agendaTaller = new Agenda(document.querySelector("#agendaTaller"));

        document.querySelector("#btnTalleres").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");

            if(form.checkValidity() === true) {
                let nomTaller = document.querySelector("#nomTaller").value;
                let sFechaInicio = document.querySelector("#fechaInicio").value;
                sFechaInicio = sFechaInicio.split("-");
                let fechaInicio = new Date(sFechaInicio[0], sFechaInicio[1]-1, sFechaInicio[2]);
                let sFechaTermino = document.querySelector("#fechaTermino").value;
                sFechaTermino = sFechaTermino.split("-");
                let fechaTermino = new Date(sFechaTermino[0], sFechaTermino[1]-1, sFechaTermino[2]);
                let lugaresDis = document.querySelector("#lugaresDis").value;
                let duracion = document.querySelector("#duracion").value;

                let objTaller = {
                    nomTaller: nomTaller,
                    fechaInicio: fechaInicio,
                    fechaTermino: fechaTermino,
                    lugaresDis: lugaresDis,
                    duracion: duracion
                }

                let taller = new Taller(objTaller);
                agendaTaller.addTaller(taller);
            }
        });
    }
}

let m = new Main()