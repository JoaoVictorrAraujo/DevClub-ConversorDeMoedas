const convertButtom = document.querySelector('.convert-buttom')

function convertValues(){
 const inputCurrencyValue = document.querySelector('.input-currency').value
 const pCurrencyValueToConvert = document.querySelector('.currency-value-to-convert')
 const pCurrencyValue = document.querySelector('.currency-value')
 const currencySelectValue = document.querySelector('.currency-select').value

 const dolarToday=5.2
 const euroToday= 6.2


if(currencySelectValue=='dolar'){
    pCurrencyValue.innerHTML = new Intl.NumberFormat("en-IN",{
        style: "currency",
        currency:"USD"
     }).format(inputCurrencyValue/dolarToday)
} else if(currencySelectValue=="euro"){
    pCurrencyValue.innerHTML = new Intl.NumberFormat("de-DE",{
        style: "currency",
        currency:"EUR"
     }).format(inputCurrencyValue/euroToday)
}



 pCurrencyValueToConvert.innerHTML= new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency:"BRL"
 }).format(inputCurrencyValue)


 
}

function trocarImg(){
    console.log("Alterando para euro")
    
}

convertButtom.addEventListener('click', convertValues)
const selectOption = document.querySelector()
