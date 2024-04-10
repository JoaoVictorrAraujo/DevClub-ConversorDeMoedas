const convertButtom = document.querySelector('.convert-buttom')
const currencySelectValue = document.querySelector('.currency-select')

function convertValues(){
 const inputCurrencyValue = document.querySelector('.input-currency').value
 const pCurrencyValueToConvert = document.querySelector('.currency-value-to-convert')
 const pCurrencyValue = document.querySelector('.currency-value')


 const dolarToday=5.2
 const euroToday= 6.2


if(currencySelectValue.value=='dolar'){
    pCurrencyValue.innerHTML = new Intl.NumberFormat("en-IN",{
        style: "currency",
        currency:"USD"
     }).format(inputCurrencyValue/dolarToday)
} else if(currencySelectValue.value=="euro"){
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
   const currencyName = document.getElementById('currency-name')
   const logoImg = document.getElementById('logoUSA')

   if(currencySelectValue.value=='dolar'){
   currencyName.innerHTML='Dólar Americano'
   logoImg.src="./assets/EstadosUnidos.png"
}else if (currencySelectValue.value=='euro'){
    currencyName.innerHTML='Euro'
    logoImg.src='./assets/Euro.png'
    
}
convertValues()
}
convertButtom.addEventListener('click', convertValues)
currencySelectValue.addEventListener('change', trocarImg)
