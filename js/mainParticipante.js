import AgendaPar from "./AgendaParticipante.js";
import Participante from "./Participante.js";

// Formulario 2
class Main2 {
    constructor() {
        let agendaPar = new AgendaPar(document.querySelector("#agendaPar"));


        document.querySelector("#btnParticipante").addEventListener("click", () => {
            let form = document.querySelector("#form2");
            form.classList.add("was-validated");

            let talleres = JSON.parse(localStorage.getItem("talleres"));
            let tallerAsignado = $("#listaTaller option:selected").text();

            talleres.forEach((t, i) => {
                if (tallerAsignado === t.nomTaller) {
                    if (t.lugaresDis > 0) {
                        console.log("se encontró nombre de taller compatible con: " + t.lugaresDis + " lugares");
                        console.log(tallerAsignado);
                        console.log(t.nomTaller);

                        //aqui le resto uno al cupo del taller
                        talleres[i].lugaresDis = parseInt(t.lugaresDis) - 1;
                        console.log(talleres);

                        localStorage.setItem("talleres", JSON.stringify(talleres));

                        if (form.checkValidity() === true) {
                            let nomParticipante = document.querySelector("#nomParticipante").value;
                            let correo = document.querySelector("#correo").value;
                            let sFechaNac = document.querySelector("#fechaNac").value;
                            sFechaNac = sFechaNac.split("-");
                            let fechaNac = new Date(sFechaNac[0], sFechaNac[1] - 1, sFechaNac[2]);
                            let tallerAsignado = $("#listaTaller option:selected").text();

                            let objParticipante = {
                                nomParticipante: nomParticipante,
                                correo: correo,
                                fechaNac: fechaNac,
                                tallerAsignado: tallerAsignado
                            }

                            let participante = new Participante(objParticipante);
                            agendaPar.addParticipante(participante);
                        }
                    }
                    else {
                        $('#alert-container').html( '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Ups!</strong> ¡No hay lugares disponibles!<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div>');
                        console.log("si hay taller pero no lugares");
                        console.log(tallerAsignado);
                        console.log(t.nomTaller);
                        console.log("taller con: " + t.lugaresDis + " lugares");
                    }

                }
            });

        });
        //ver los cursos
        $(document).ready(function () {
            let talleres = JSON.parse(localStorage.getItem("talleres"));
            var noTalleres = "";

            if (talleres === null) {
                console.log("no hay talleres")
                document.getElementById("listaTaller").innerHTML = noTalleres;
                return;
            }
            var opciones = ""

            talleres.forEach((taller) => {

                opciones += "<option>" + taller.nomTaller + "</option>";
                console.log("talleres disponibles")
                console.log(taller.nomTaller);


            });
            document.getElementById("listaTaller").innerHTML = opciones;

        });
        //Seleccionar taller
        $('select#listaTaller').on('change', function () {
            var valor = $(this).val();
            document.getElementById("seleccionado").innerHTML = valor;
        });

        //Eliminar participante
        $('.buttonEliminar').on('click', function () {
            console.log(this.id)

            let participantes = JSON.parse(localStorage.getItem("participantes"));
            console.log(participantes)

            let talleres = JSON.parse(localStorage.getItem("talleres"));
            let tallerAsignado = $("#listaTaller option:selected").text();


            participantes.forEach((p, i) => {

                console.log("correo de participante")
                console.log(p.correo)

                if (this.id === p.correo) {

                    participantes.splice(i, 1)
                    localStorage.setItem("participantes", JSON.stringify(participantes))
                    alert("¡Usuario eliminado correctamente!");
                    talleres.forEach((t, i) => {

                        if (tallerAsignado === t.nomTaller) {

                            //aqui le sumo uno al cupo del taller
                            talleres[i].lugaresDis = parseInt(t.lugaresDis) + 1
                            localStorage.setItem("talleres", JSON.stringify(talleres));
                            console.log(talleres)


                        }
                    })
                    location.reload()
                }
            });
        });

    }

}

let m2 = new Main2()