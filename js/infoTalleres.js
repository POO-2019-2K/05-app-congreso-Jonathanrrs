//ver los cursos
$(document).ready(function () {
    let talleres = JSON.parse(localStorage.getItem("talleres"));
    var noTalleres = "";

    if (talleres === null) {
        console.log("no hay talleres")
        document.getElementById("listaTalleres").innerHTML = noTalleres;
        return;
    }
    var opciones = ""

    talleres.forEach((taller) => {

        opciones += "<option>" + taller.nomTaller + "</option>";

        // console.log(taller.nomTaller);
    });
    document.getElementById("listaTalleres").innerHTML = opciones;

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
    var nombres = "";

    participantes.forEach((p) => {
        if (tallerAsignado === p.tallerAsignado) {
            nombres+= "<label>" + p.nomParticipante+ "</label><br>" ;
            var lugares = "";
            talleres.forEach((t,index) => {
                if (tallerAsignado === t.nomTaller) {
                    lugares += t.lugaresDis;
                    document.getElementById("mostrar").innerHTML = "Nombre de taller: " + p.tallerAsignado + " con " + lugares + " lugares disponibles.";
                   
                    document.getElementById("mostrar3").innerHTML = "Participantes: "  + nombres;
                }
            });
           
        }
    });
    
});


