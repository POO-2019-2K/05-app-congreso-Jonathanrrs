import Agenda from "./Agenda.js";
import Taller from "./Taller.js";

import AgendaPar from "./AgendaPar.js";
import Participante from "./Participante.js";

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
// Formulario 2
class Main2 {
    constructor() {
        let agendaPar = new AgendaPar(document.querySelector("#agendaPar"));

        document.querySelector("#btnParticipante").addEventListener("click", () => {
            let form = document.querySelector("#form2");
            form.classList.add("was-validated");

            if(form.checkValidity() === true) {
                let nomParticipante = document.querySelector("#nomParticipante").value;
                let correo = document.querySelector("#correo").value;
                let sFechaNac = document.querySelector("#fechaNac").value;
                sFechaNac = sFechaNac.split("-");
                let fechaNac = new Date(sFechaNac[0], sFechaNac[1]-1, sFechaNac[2]);

                let objParticipante = {
                    nomParticipante: nomParticipante,
                    correo: correo,
                    fechaNac: fechaNac
                }

                let participante = new Participante(objParticipante);
                agendaPar.addParticipante(participante);
            }
        });
    }
}

let m2 = new Main2()