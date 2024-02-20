
//Le pedimos al jugador que elija un nro, las opciones son 0 (piedra), 1 (papel) o 2 (tijera)

var repeatx = +(prompt("¿Cuántas veces quieres jugar?"));

function jugar (){
    
    for (var i = 1; i <= repeatx ; i++) {
        
        var player = +(prompt("Elige un número: 0, 1 o 2"));
        var maquina = Math.floor(Math.random()*3);
    
        /*Si el jugador elige PIEDRA*/
    if(player == 0 && maquina == 0){
        document.write("<br>" + "Ambos eligieron Piedra, ha sido un empate"+ "<br>")
    } else if (player == 0 && maquina == 1){
        document.write("<br>" + "Has elegido Piedra y el papel vence a la piedra, Perdiste"+ "<br>")
    } else if (player == 0 &&  maquina == 2){
        document.write("<br>" + "La piedra vence las tijeras, Felicitaciones ganaste!!"+ "<br>")
        /*ahora si el jugador elige PAPEL*/
    } else if (player == 1 && maquina == 0){
        document.write("<br>" + "Has elegido Papel y el papel vence a la piedra, Felicitaciones Ganaste!!"+ "<br>")    
    } else if (player == 1 && maquina == 1){
        document.write("<br>" + "Ambos eligieron Papel, ha sido un empate"+ "<br>")
    } else if (player == 1 &&  maquina == 2){
        document.write("<br>" + "Elegiste Papel y las tijeras vencen el papel, Perdiste"+ "<br>")
        /*Ahora si el jugador elije TIJERAS*/
    } else if (player == 2 && maquina == 0){
        document.write("<br>" + "Elegiste Tijeras, pero Piedra vence tijeras, has perdido"+ "<br>")
    } else if (player == 2 && maquina == 1){
        document.write("<br>" + "Elejiste Tijeras y tijeras vence al Papel, Felicitaciones Ganaste!!"+ "<br>")
    } else if (player == 2 && maquina == 2){
        document.write("<br>" + "Ambos eligieron Tijeras, es un empate"+ "<br>")
    } else {
        document.write("<br>" + "ocurrió un error, comienza otra vez"+ "<br>")
    }

}
}

jugar()
document.write("<br>" + "Gracias por jugar con nosotros :D" + "<br>")