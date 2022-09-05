let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToYen = (valueInDollar) => {
    // convertimos el valor a dolares
    let euroAmount = valueInDollar *0.833;
    let valueInYen = euroAmount * 127.9;
    let yenAmount =  valueInYen.toFixed(2);
    let numberYen = parseFloat(yenAmount) ;
    // retornamos el valor
    return numberYen;

}
console.log(fromDollarToYen())

const fromYenToPound = (valueInYen)=>{
    // convertimos el valor a dolares

    let euroAmount= valueInYen * 0.0078;
    let valueInPound= euroAmount * 0.8;
    let poundAmount= valueInPound.toFixed(4)
    let poundFinal= parseFloat(poundAmount)

    // retornamos el valor
    return poundFinal;
}
// esta es mi función que suma dos números



console.log(fromYenToPound(1));
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };