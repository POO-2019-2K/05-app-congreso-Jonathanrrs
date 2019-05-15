import Agenda from "./Agenda.js";
import Taller from "./Taller.js";

class Main {
    constructor() {
        let agendaTaller = new Agenda(document.querySelector("#agendaTaller"));

        document.querySelector("#btnTalleres").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");

            if (form.checkValidity() === true) {
                let nomTaller = document.querySelector("#nomTaller").value;
                let sFechaInicio = document.querySelector("#fechaInicio").value;
                sFechaInicio = sFechaInicio.split("-");
                let fechaInicio = new Date(sFechaInicio[0], sFechaInicio[1] - 1, sFechaInicio[2]);
                let sFechaTermino = document.querySelector("#fechaTermino").value;
                sFechaTermino = sFechaTermino.split("-");
                let fechaTermino = new Date(sFechaTermino[0], sFechaTermino[1] - 1, sFechaTermino[2]);
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


        $('.buttonEliminarTaller').on('click', function () {
            console.log(this.id);
            let talleres = JSON.parse(localStorage.getItem("talleres"));
            console.log(talleres);
            let participantes = JSON.parse(localStorage.getItem("participantes"));
            console.log(participantes);
            talleres.forEach((t, i) => {


                console.log("nombre taller");
                console.log(t.correo);

                if (this.id === t.nomTaller) {
                    console.log("entró al if");

                    if (participantes.length === 0) {
                        console.log("array vacio");
                        console.log(talleres);

                        console.log(talleres);
                        talleres.splice(i, 1);
                        localStorage.setItem("talleres", JSON.stringify(talleres));
                        alert("Taller Eliminado, no tenia Participantes");
                        location.reload();

                    }
                    else {
                        var eliminar = true;

                        participantes.forEach((p, z) => {

                            console.log("nombre participante")
                            console.log(p.tallerAsignado);

                            if (t.nomTaller === p.tallerAsignado) {

                                alert("Taller con Participantes Registrados, no se puede eliminar");

                                eliminar = false;

                            }

                        });
                        if (eliminar) {
                            console.log("entró al if")
                            talleres.splice(i, 1)
                            localStorage.setItem("talleres", JSON.stringify(talleres));
                            alert("Eliminado correctamente");
                            location.reload();

                        }

                    }

                }

            })

        });

    }
}

let m = new Main()