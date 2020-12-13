(function(){

    var mostrarHora = function(){

        let fecha, horas, minutos, segundos, diaSemana, dia, mes, anio;

        fecha = new Date();
        horas = fecha.getHours();
        minutos = fecha.getMinutes();
        segundos = fecha.getSeconds();
        diaSemana = fecha.getDay();
        dia = fecha.getDate();
        mes = fecha.getMonth();
        anio = fecha.getFullYear();

        let pHoras, pAMPM, pMinutos, pSegundos, pDiaSemana, pDia, pMes, pAnio;

        pHoras = document.getElementById("horas");
        pAMPM = document.getElementById("ampm");
        pMinutos = document.getElementById("minutos");
        pSegundos = document.getElementById("segundos");
        pDiaSemana = document.getElementById("diaSemana");
        pDia = document.getElementById("dia");
        pMes = document.getElementById("mes");
        pAnio = document.getElementById("anio");

        let semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        pDiaSemana.textContent = semana[diaSemana];

        pDia.textContent = dia;

        let meses = ['Enero', 'Febrero', 'Marzo', 'ABril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        pMes.textContent = meses[mes];

        pAnio.textContent = anio;

        let ampm;

        if(horas>=12){
            horas = horas - 12;
            ampm = "PM"
        } else {
            ampm = "AM";
        }

        if(horas == 0) { horas = 12; }

        pHoras.textContent = horas;
        pAMPM.textContent = ampm;

        if(minutos<10) { minutos = "0"+minutos; }
        if(segundos<10) { segundos = "0"+segundos; }

        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;

    };

    mostrarHora();
    var intervalo = setInterval(mostrarHora, 1000);

}());