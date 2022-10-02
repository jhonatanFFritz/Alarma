

//Capturamos los elementos en variables
let icon = document.getElementById("menu-icon");
let menu = document.getElementById("menu");
let body =  document.getElementById("body");

//Utilizamos el método "toggle" al elemento que sirve de botón
//para quitar o añadir la clase "menu_list--ver" de la lista de clases "classList"
icon.onclick = () => {
    menu.classList.toggle("menu_list--ver");
};



//Con el siguiente codigo podemos hacer que el menu desaparezca al quitar le mouse del menú y aparezaca cuando pasamos el mouse sobre el botón del menu
// icon.onmouseover = () => {
//     menu.classList.add("menu_list--ver");
// };

// menu.onmouseleave = () => {
//     menu.classList.remove("menu_list--ver");
// };

//OBTENEMOS LA HORA Y PROGRAMAMOS LA ALARMA
// function actualizaHora(){//funcion que actualiza la hora cada segundo

//         // Obteniendo la hora y fecha
//     let time = new Date();

//     //obtenemos solo los datos necesarios de la hora
//     let hora = time.getHours();
//     let minuto = time.getMinutes();
//     let segundo = time.getSeconds();

//    //ayudantes
// //    const alarmas = 

//     //en caso de querer formato de 12 horas (am / pm)
//     let sufijo = " AM";
//     if(hora > 12){
//         hora = hora - 12;
//         sufijo = " PM";
//         document.getElementById("ampm").innerHTML = sufijo;
//     }else{
//         sufijo = " AM"
//         document.getElementById("ampm").innerHTML = sufijo;
//     }
    


//     if(hora < 10) {
        
//         document.getElementById("horas").innerHTML = "0" + hora;
//     } else{
//         document.getElementById("horas").innerHTML = hora;
//     }

//     if(minuto < 10) {
    
//         document.getElementById("minutos").innerHTML = "0" + minuto;
//     } else{
//         document.getElementById("minutos").innerHTML = minuto;
//     }

//     if(segundo < 10) {
        
//         document.getElementById("segundos").innerHTML = "0" +segundo;
//     } else{
//         document.getElementById("segundos").innerHTML = segundo;
//     }
//     let a = document.getElementById("seth").value;
//     // comparando valores
//     if (hora === a){
//         console.log("se compara")
        
//     }

// }

//Creando las alarmas
const alarms = [];
//creando helpers
const getElement = (id) => document.getElementById(id);
const createElement = (tag) => document.createElement(tag);

//Creamos la clase Clock
class Alarma{
     locale = "es-Es";

     init (){
        setInterval(this.build, 1000);
     }

     build = () =>{
        const clockEL = getElement("hora");
        const time = this.toLocaleTimeString(new Date);
        clockEL.innerHTML = time;
        this.checkAlarm(time);
     }

     clearForm = () =>{
        getElement("seth").value = "";
        getElement("setm").value = "";
        getElement("sets").value = "";

        getElement("seth").focus();
     }

     addAlarm = () =>{
        const date = new Date;
        date.setHours(getElement("seth").value);
        date.setMinutes(getElement("setm").value);
        date.setSeconds(getElement("sets").value);

        alarms.push(date);

        this.clearForm();

        this.displayAlarm();
     }

     renderAlarm = (alarm, alarmList) =>{
        const li = createElement("li");
        li.innerHTML = `Alarma Seteada: ${this.toLocaleTimeString(alarm)}`;
        alarmList.appendChild(li);
        
     }

     displayAlarm = () =>{
        alarms.sort((d1,d2) => d1 - d2);
        const alarmList = getElement("lista-alarmas");
        alarmList.innerHTML = "";

        for(let i = 0; i < alarms.length; i++){
            this.renderAlarm(alarms[i], alarmList);
        }
     }

     checkAlarm = (time) =>{
        for(let i = 0; i < alarms.length; i++){
            const alarm = this.toLocaleTimeString(alarms[i]);
            if(alarm === time){
                alarms.splice(i, 1);
                this.displayAlarm();
                
                getElement("modal-alarm").style.display = "flex";
            }
        }
     }

     toLocaleTimeString = (date) =>{
        return date.toLocaleTimeString(
            this.locale,
            {
                hours: "2-digit",
                minutes: "2-digit",
                seconds: "2-digit",
            }
        )
     }  
}
const alarma = new Alarma;
alarma.init();


function Fechas(){//Fucnión para mostrar la fecha actual
    let time = new Date();
    //Mostrar fecha
    let dia = time.getDay();
    let dias = [
        'Domingo',
        'Lunes',
        'Martes',
        'Mierocles',
        'Jueves',
        'Viernes',
        'Sábado'
    ];
    let nomdia = dias[dia];
    let hoy = time.getDate();
    //debemos agrgarle más 1 al getMonth() por que el método devuelve vlaores indexados entre 0(enero) - 11(diciembre)
    let mes = time.getMonth();
    //mostrar nombres del mes
    let meses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];

    let nommes = meses[mes];
    let year = time.getFullYear();
    console.log(nomdia + " " + hoy + " " + nommes + " " + year);

        // podemos mostrar concatendao varios calores usando esto: `Este es el día ${nomdia}`

    document.getElementById("fecha").innerHTML = `${nomdia}, ${hoy} de ${nommes} del ${year}`;
    
    
}

window.onload = function(){
    // document.getElementById("modal-alarm").style.display = "none";
    // actualizaHora();
    // setInterval(actualizaHora, 1000);
    Fechas();
    
}


//Codigo apra cerrar el modal de la alarma lanzada
 getElement("ekis").onclick = () => {
    getElement("modal-alarm").style.display = "none";
 }
 getElement("close-modal").onclick = () => {
    getElement("modal-alarm").style.display = "none";
 }