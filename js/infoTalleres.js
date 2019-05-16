//ver los cursos
$(document).ready(function () {
    let talleres = JSON.parse(localStorage.getItem("talleres"));
    var noTalleres = "";

    if (talleres === null) {
        console.log("no hay talleres")
        document.getElementById("nohayt").innerHTML = "no hay talleres";
        return;
    }
    else{
        var opciones = ""
        talleres.forEach((taller) => {
            opciones += "<option>" + taller.nomTaller + "</option>";
        });
        document.getElementById("listaTalleres").innerHTML = opciones;
    }
});

//seleccionar el taller
$('select#listaTalleres').on('change', function () {
    var valor = $(this).val();
    document.getElementById("seleccionados").innerHTML = valor;
});

$('.buttonVer').on('click', function () {
    //console.log("se dio click");
    let participantes = JSON.parse(localStorage.getItem("participantes"));
    let talleres = JSON.parse(localStorage.getItem("talleres"));
    let tallerAsignado = $("#listaTalleres option:selected").text();

    if(talleres=== null){
        
        document.getElementById("seleccionados").innerHTML = "No hay talleres ";
    }
    else{

        if(participantes === null){

        document.getElementById("seleccionados").innerHTML = "No hay participantes ";
        }
        else{
        
    var nombres = "";
    participantes.forEach((p) => {
        if (tallerAsignado === p.tallerAsignado) {
            nombres+= "<label>" + p.nomParticipante+ "</label><br>";
            var lugares = "";
            talleres.forEach((t) => {
                if (tallerAsignado === t.nomTaller) {
                    lugares += t.lugaresDis;
                    document.getElementById("mostrar").innerHTML = "Nombre de taller: " + p.tallerAsignado + " con " + lugares + " lugares disponibles.";
                    console.log(p.nomParticipante);
                    document.getElementById("mostrar3").innerHTML = nombres;
                }
            });
        }
    });
    }
    }
});

