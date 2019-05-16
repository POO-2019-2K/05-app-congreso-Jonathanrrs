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


