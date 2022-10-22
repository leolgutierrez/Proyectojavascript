let articulos =[];

function cargar_carritos(){
    Art=ingregar_articulo();
    articulos.push(Art)
    while(prompt("desea continuar? ingrese si/no") != "no" ){
        Art=ingregar_articulo();
        articulos.push(Art)
    }    
    
};

function ingregar_articulo(){
    let nombre=prompt("Ingrese nombre articulo");
    let cantidad=prompt("Ingrese cantidad articulo");
    let precio=prompt("ingrese el precio del articulo");
    const Art=new articulo(nombre,cantidad,precio);
    return(Art);
}


class articulo{
    constructor(nombre,cantidad,precio){
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.precio=precio;
    }
    
    
}


function modificar_pagina(){
    let papa=articulos[0];

}

cargar_carritos();
modificar_pagina();

let parrafo=document.createElement("p");

parrafo.innerHTML="<h2>!bolas!</h2>";

document



