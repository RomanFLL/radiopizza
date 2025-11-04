cartaPizzas = [
    {
        "nombre" : "hawaiana",
        "precio" : 9.50,
        "ingredientes" : ["tomate", "mozarella", "piña", "doble de york"],
        "masa" : ["fina", "normal"],
        "novedad" : false,
        "oferta" : true,
        "imagen" : "/img/hawaiana.png"
    },
    {
        "nombre" : "barbacoa",
        "precio" : 11.50,
        "ingredientes" : ["tomate", "mozarella", "bacon", "pollo", "salsa barbacoa", "doble carne vacuno"],
        "masa" : ["normal"],
        "novedad" : true,
        "oferta" : false,
        "imagen" : "/img/barbacoa.png"
    },
    {
        "nombre" : "Bacon crispy",
        "precio" : 10.50,
        "ingredientes" : ["tomate", "mozarella", "bacon", "bacon crispy", "salsa barbacoa"],
        "masa" : ["fina","normal"],
        "novedad" : true,
        "oferta" : true,
        "imagen" : "/img/baconcrispy.png"
    },
    {
        "nombre" : "Carbonara",
        "precio" : 10.50,
        "ingredientes" : ["tomate", "mozarella", "doble bacon", "champiñón", "salsa carbonara"],
        "masa" : ["fina","normal", "integral"],
        "novedad" : true,
        "oferta" : true,
        "imagen" : "/img/carbonara.png"
    }
];

pizzasCompradas = [];

function mostrarPizzas(){

    cartaPizzas.forEach((pizza) => {
        let h3 = document.createElement('h3');
        let li = document.createElement('li');
        let prc = document.createElement('h4');

        let listaIng = document.createElement('ul');
        pizza.ingredientes.forEach((ingredientes) =>{
            let li = document.createElement('li');
            li.innerHTML = ingredientes;
            listaIng.appendChild(li);
        })

        prc.innerHTML = "Precio: "+pizza.precio+"€";
        h3.innerHTML = pizza.nombre;
        li.appendChild(h3);
        li.appendChild(prc);
        li.append(listaIng);

        let boton = document.createElement('button');
        boton.innerHTML = "Comprar";
        boton.id = pizza.nombre;
        document.getElementById('listadoPizzas').appendChild(h3);
        document.getElementById('listadoPizzas').appendChild(prc);
        document.getElementById('listadoPizzas').appendChild(listaIng);
        document.getElementById('listadoPizzas').appendChild(boton);
    });
    let botonesCompra = document.getElementsByTagName('button');

    Array.from(botonesCompra).forEach((boton) =>{
        boton.addEventListener('click', () => {
            pizzasCompradas.push(boton.id)
            console.log("Ahora hay "+pizzasCompradas.length+" en el carrito")
        });
    })
}

mostrarPizzas();