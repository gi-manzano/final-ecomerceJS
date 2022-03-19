const PRODUCTS =

[
    {
        id: 1,
        nombre: "Ingles Junior",
        tipo: "curso",
    
        desc: "Un curso ideal para vos",
        precio: 12000,
        img: "/public/img/3.jpg",
        cantidad: 1
    },

    {
        id: 2,
        nombre: "Ingles Basico",
        tipo: "cursos",
        idioma: "Ingles",
        desc: "Una cursos ideal para vos",
        precio: 11000,
        img: "/public/img/2.jpg",
        cantidad: 1
    },

    {
        id: 3,
        nombre: "Ingles Intermedio",
        tipo: "curso",
        idioma: "Ingles",
        desc: "Un curso ideal para vos",
        precio: 12000,
        img: "/public/img/4.jpg",
        cantidad: 1
    },

    {
        id: 4,
        nombre: "Italiano Bascio",
        tipo: "curso",
       
        desc: "Un curso ideal para vos",
        precio: 14000,
        img: "/public/img/2.jpg",
        cantidad: 1
    },

    {
        id: 5,
        nombre: "Frances Intermedio",
        tipo: "curso",
        idioma: "Frances",
        desc: "Un curso ideal para vos",
        precio: 12000,
        img: "/public/img/1.jpg",
        cantidad: 1
    },

    {
        id: 6,
        nombre: "Portugues Basico",
        tipo: "curso",
      
        desc: "Un curso ideal para vos",
        precio: 1500,
        img: "/public/img/4.jpg",
        cantidad: 1
    },
]

export { PRODUCTS };

const getProducts = () => 
{
    return new Promise ((resolve, reject) => 
    {
        setTimeout ( () => {
        resolve (PRODUCTS)
        }, 2000)
    })
}

getProducts () .then( ( PRODUCTS) => {
    console.log (PRODUCTS)
})

const eventoFuturo = (res) => {
    return new Promise (( resolve, rejeat) => {
        if ( res === true) {
            resolve ('promesa resuelta')
        } else {
            rejeat ('promesa rechasada')
        }
    })
}

console.log(eventoFuturo(true));


