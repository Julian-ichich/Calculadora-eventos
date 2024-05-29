let resultado = document.querySelector('#display-resultado');
let botonUno = document.querySelector('#btn-1');
let botonDos = document.querySelector('#btn-2')
let botonTres = document.querySelector('#btn-3')
let botonCuatro = document.querySelector('#btn-4')
let botonCinco = document.querySelector('#btn-5')
let botonSeis = document.querySelector('#btn-6')
let botonSiete = document.querySelector('#btn-7')
let botonOcho = document.querySelector('#btn-8')
let botonNueve = document.querySelector('#btn-9')
let botonCero = document.querySelector('#btn-cero')
let botonSuma = document.querySelector('#btn-suma')
let botonResta = document.querySelector('#btn-resta')
let botonMultiplicar = document.querySelector('#btn-multiplicar')
let botonDividir = document.querySelector('#btn-dividir')
let botonClear = document.querySelector('#btn-clear')
let botonIgual = document.querySelector('#btn-igual')
let valorUno = ''
let valorDos = ''
let controlDeOperacion = ''
let valorUnosuma = ''
let valorUnoResta = ''
let valorUnoMultiplicar = ''
let valorUnoDivision = ''
let verificadordeoperacion = 0
let valorentotalsuma = 0
let valorentotalresta = 0
let valorentotalmultiplicar = 1 
let valorentotaldividir = 0

botonUno.addEventListener('click', () => {
    resultado.value += botonUno.value
    verificadordeoperacion = 0

})

botonDos.addEventListener('click', () => {
    resultado.value += botonDos.value
    verificadordeoperacion = 0
})

botonTres.addEventListener('click', () => {
    resultado.value += botonTres.value
    verificadordeoperacion = 0
})

botonCuatro.addEventListener('click', () => {
    resultado.value += botonCuatro.value
    verificadordeoperacion = 0
})

botonCinco.addEventListener('click', () => {
    resultado.value += botonCinco.value
    verificadordeoperacion = 0
})

botonSeis.addEventListener('click', () => {
    resultado.value += botonSeis.value
    verificadordeoperacion = 0
})

botonSiete.addEventListener('click', () => {
    resultado.value += botonSiete.value
    verificadordeoperacion = 0
})

botonOcho.addEventListener('click', () => {
    resultado.value += botonOcho.value
    verificadordeoperacion = 0
})

botonNueve.addEventListener('click', () => {
    resultado.value += botonNueve.value
    verificadordeoperacion = 0
})

botonCero.addEventListener('click', () => {
    resultado.value += botonCero.value
    verificadordeoperacion = 0
})

botonSuma.addEventListener('click', () => {
    verificadordeoperacion++
    if (verificadordeoperacion == 1) {
        valorUno = resultado.value
        valorUnosuma = parseInt(valorUno)
        valorentotalsuma = valorentotalsuma + valorUnosuma
        resultado.value = ''
        controlDeOperacion = 1
    }
    
})

botonResta.addEventListener('click', () => {
    verificadordeoperacion++
    if (verificadordeoperacion == 1) {
        valorUno = resultado.value
        valorUnoResta = parseInt(valorUno)
        resultado.value = ''
        controlDeOperacion = 2
    }
})

botonMultiplicar.addEventListener('click', () => {
    verificadordeoperacion++
    if (verificadordeoperacion == 1) {
        valorUno = resultado.value
        valorUnoMultiplicar = parseInt(valorUno)
        valorentotalmultiplicar = valorentotalmultiplicar * valorUnoMultiplicar
        resultado.value = ''
        controlDeOperacion = 3
    }
})

botonDividir.addEventListener('click', () => {
    verificadordeoperacion++
    if (verificadordeoperacion == 1) {
        valorUno = resultado.value
        valorUnoDivision = parseInt(valorUno)
        resultado.value = ''
        controlDeOperacion = 4
    }
})

botonClear.addEventListener('click', () => {
    resultado.value = ""
    valorUno=0
    valorDos=0
    valorentotalsuma=0
    valorentotalresta=0
    valorentotalmultiplicar= 1
    valorentotaldividir = 0
})

botonIgual.addEventListener('click', () => {
    if (resultado.value == '') {
        alert('ingrese su operacion')
    }

    switch (controlDeOperacion) {
        case 1:
            valorUnosuma= valorentotalsuma
            valorDos = resultado.value
            let valorDosSuma = parseInt(valorDos)
            resultado.value = ''
            let resultadosuma = valorUnosuma + valorDosSuma
            valorUno=resultadosuma
            resultado.value = resultadosuma
            valorentotalsuma=0
            break;
        case 2:
            //valorUnoResta=valorentotalresta
            valorDos = resultado.value
            let valorDosResta = parseInt(valorDos)
            resultado.value = ''
            let resultadoresta = valorUnoResta - valorDosResta
            resultado.value=resultadoresta
            valorUnoResta=resultado.value
            break;
        case 3:
            valorUnoMultiplicar = valorentotalmultiplicar
            valorDos = resultado.value
            let valorDosMultiplicar = parseInt(valorDos)
            resultado.value = ''
            let resultadomultiplicacion = valorUnoMultiplicar * valorDosMultiplicar
            resultado.value = resultadomultiplicacion
            valorentotalmultiplicar=1
            break;
        case 4:
            valorDos = resultado.value
            let valorDosDividir = parseInt(valorDos)
            resultado.value = ''
            let resultadodivision = valorUnoDivision / valorDosDividir
            resultado.value = resultadodivision
             valorentotaldividir = 0
            break;

    }
})


