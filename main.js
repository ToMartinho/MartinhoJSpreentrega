let reserva = false;
let horario;

let dias = prompt("seleccione uno de los siguientes dias disponibles para su reserva LUN MIE JUE VIE").toUpperCase();

function verificarHorario(horario){

    let disponible = false;
    while(disponible != true){
        switch(horario){
            case 12:
                alert("el horario seleccionado esta disponible");
                disponible = true;
                return horario;
            case 14:
                alert("el horario seleccionado esta disponible");
                disponible = true;
                return horario;
            case 16:
                alert("el horario seleccionado esta disponible");
                disponible = true;
                return horario;
            case 17:
                alert("el horario seleccionado esta disponible");
                disponible = true;
                return horario;
            case 18:
                alert("el horario seleccionado esta disponible");
                disponible = true;
                return horario;
            case 19:
                alert("el horario seleccionado esta disponible");
                disponible = true;
                return horario;
            case 21:
                alert("el horario seleccionado esta disponible");
                disponible = true;
                return horario;
            default:
                alert("el horario seleccionado no se encuentra disponible pruebe con otro horario");
                horario = parseInt(prompt("seleccione un nuevo horario"));
            }
                                          
        }
    
}
    

while(reserva != true){
    if(dias == "LUN" || dias == "MIE" || dias == "JUE" || dias == "VIE"){
        alert("Usted a seleccionado el " + dias + " para su reserva");
        reserva = true;
    }else{
        alert("usted selecciono un dia no disponile para su reserva");
        dias = prompt("seleccione uno de los siguientes dias disponibles para su reserva LUN MIE JUE VIE").toUpperCase();
    }
}

horario = parseInt(prompt("a conitnuacion seleccione un horario a verificar disponibilidad de 10 a 23"));
horario = verificarHorario(horario);


alert("Su reservar se a realizado para el dia " + dias +" en el horario de las " + horario +"HS");




   
