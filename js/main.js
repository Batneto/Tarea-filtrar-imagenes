//todo VARIABLES
const boton=document.querySelectorAll(".boton")
const divFotos=document.querySelector("#divFotos")
const divbotones=document.querySelector("#botones")
const fragment= document.createDocumentFragment()


//todo Arrays
let arrayFotos=[
    {
        id:"1",
        clase:"playa",
        titulo:"Foto 1",
        src:"img/viajes/viajes-1.jpg",
    },
    {
        id:"2",
        clase:"playa",
        titulo:"Foto 2",
        src:"img/viajes/viajes-2.jpg",
    },
    {
        id:"3",
        clase:"cartel",
        titulo:"Foto 3",
        src:"img/viajes/viajes-3.jpg",
    },
    {
        id:"4",
        clase:"palacio",
        titulo:"Foto 4",
        src:"img/viajes/viajes-4.jpg",
    },
    {
        id:"5",
        clase:"palacio",
        titulo:"Foto 5",
        src:"img/viajes/viajes-5.jpg",
    },
    {
        id:"6",
        clase:"acantilado",
        titulo:"Foto 6",
        src:"img/viajes/viajes-6.jpg",
    },
    {
        id:"7",
        clase:"palacio",
        titulo:"Foto 7",
        src:"img/viajes/viajes-7.jpg",
    },
]

let arrayClases=["playa","cartel","palacio","acantilado","cosas"]

let arrayPintar=[]


//todo EVENTOS
    //todo evento de cada boton que busque las clases de las fotos y las mande a pintar 
    document.addEventListener(`click`,({target})=>{
        if(target.matches(`.boton`)){
            const id =target.parentElement.id
            
            encontrarFotos(id)
        }
      })

//todo FUNCIONES



function pintarBotones() {
    divFotos.innerHTML=""
    arrayClases.forEach((item) => {
        const caja=document.createElement('DIV')
        const botonDinamic = document.createElement("button");
        botonDinamic.textContent += item;
        botonDinamic.classList.add('boton');
        caja.id=item

        caja.append(botonDinamic)
         
        divbotones.append(caja);
      });

   
}



pintarBotones()


const encontrarFotos=(clase)=>{
    
    arrayFotos.forEach(item => {
        if(clase==item.clase){
            console.log(item);
           arrayPintar.push(item)
           pintarFotos(arrayPintar)
        }
    });
    
}

function pintarFotos(array) {
    divFotos.innerHTML=" "
    
    console.log(array);
    
    // arrayPintar=[]
    array.forEach(({id,titulo,src}) => {

        const caja=document.createElement('DIV')
        const titulofoto = document.createElement("h3");
        titulofoto.textContent = titulo;
        const img = document.createElement("img");
        img.classList.add('fotos');
        caja.id=id
        img.src = src;
        

        caja.append(titulofoto,img)

        fragment.append(caja)
       
      });
      divFotos.append(fragment);
      
     
    }



