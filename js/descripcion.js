$(document).ready(function(){
    var texto = "Analista y Desarrollador de Software apasionado, me enfatizo creando soluciones integrales y creativas. Experiencia en frontend y backend, comprometido con la calidad y la innovación. Apasionado por la colaboración en equipos multidisciplinarios y la búsqueda constante de nuevas tecnologías";
    var velocidadEscritura = 50; // Velocidad en milisegundos

    function escribirTexto(index) {
        $("#descripcion").text(texto.substring(0, index));
        if (index < texto.length) {
            setTimeout(function(){
                escribirTexto(index + 1);
            }, velocidadEscritura);
        }
    }

    escribirTexto(0);
});