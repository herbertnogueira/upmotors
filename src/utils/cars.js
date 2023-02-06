//arquivo que percorre um array recebendo as imagens dos carros
//com todos os detalhes dos automóveis para passar as informações
// para as telas onde estarão os carros através do MAP
import bmwZ4 from '../assets/Images/bmw-z4.webp'
import jaguar from '../assets/Images/jaguar-f-type.webp'
import audiRS4 from '../assets/Images/audi-rs4.webp'
import minicooper from '../assets/Images/minicooper.webp'
import ferrari488 from '../assets/Images/ferrari-488.webp'
import audiRS6 from '../assets/Images/audi-rs6.webp'

export const cars = [
    {
    id: 1,
    nome: "BMW Z4 sDrive 30i M Sport",
    preco: 'R$481.180',
    motor: 'Motor: 3.0 de 340 cv',
    zeroACem: '5,4 segundos',
    image: bmwZ4,
    path:'/bmw-z4'
    
    },
    {
        id: 2,
        nome: "Jaguar F-Type",
        preco: 'R$250.000',
        motor: 'Motor: 2.0 com quatro cilindros',
        zeroACem: '5,7 segundos',
        image: jaguar,
        path:'/jaguar-f-type'

    },
    {
        id:3,
        nome: "Audi RS4 Avant",
        preco: 'R$550.710',
        motor:'Motor: 2.9 com 450 cv de potência',
        zeroACem:'4,1 segundos',
        image:audiRS4,
        path:'/audi-rs4'
    },
    {
        id:4,
        nome:"Minicooper S Cabrio",
        preco:'R$269.990',
        motor: '2.0 ',
        zeroACem:'7,1 segundos',
        image: minicooper,
        path: '/minicooper'
    },
    {
        id: 5,
        nome: 'Ferrari 488 Spider',
        preco: 'R$3.714.895',
        motor: 'Motor: 3.9 com 670 cv de potência',
        zeroACem: '3,0 segundos',
        image: ferrari488,
        path:'/ferrari-488'
    },
    {
        id: 6,
        nome: "Audi RS6 Avant",
        preco: 'R$1.102.000',
        motor: 'Motor: 4.0 V8 com 600 cv de potência',
        zeroACem: '3,6 segundos',
        image: audiRS6,
        path:'/audi-rs6'
    }
]