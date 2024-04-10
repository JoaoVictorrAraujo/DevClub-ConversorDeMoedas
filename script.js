const convertButtom = document.querySelector('.convert-buttom')
const currencySelectValue = document.querySelector('.currency-select')
const currencySelectToConvert =document.querySelector('.currency-select-to-convert')

function convertValues(){
 const inputCurrencyValue = document.querySelector('.input-currency').value
 const pCurrencyValueToConvert = document.querySelector('.currency-value-to-convert')
 const pCurrencyValue = document.querySelector('.currency-value')


 const realDolarToday=5.05
 const realEuroToday= 5.44
 const realLibraToday = 6.36
 const realBitcoinToday = 345056.36

 const dolarRealToday=5.05
 const dolarEuroToday=0.93

if(currencySelectValue.value=='dolar' && currencySelectToConvert.value=='real'){
    pCurrencyValue.innerHTML = new Intl.NumberFormat("en-IN",{
        style: "currency",
        currency:"USD"
     }).format(inputCurrencyValue/realDolarToday)
} else if(currencySelectValue.value=="euro" && currencySelectToConvert.value=='real'){
    pCurrencyValue.innerHTML = new Intl.NumberFormat("de-DE",{
        style: "currency",
        currency:"EUR"
     }).format(inputCurrencyValue/realEuroToday)
} else if(currencySelectValue.value=="libra" && currencySelectToConvert.value=='real'){
    pCurrencyValue.innerHTML = new Intl.NumberFormat("en-GB",{
        style: "currency",
        currency:"GBP"
     }).format(inputCurrencyValue/realLibraToday)
} else if(currencySelectValue.value=="bitcoin" && currencySelectToConvert.value=='real'){
    pCurrencyValue.innerHTML = new Intl.NumberFormat("de-DE",{
        style: "currency",
        currency:"XBT"
     }).format(inputCurrencyValue/realBitcoinToday)
} else if(currencySelectValue.value=="real" && currencySelectToConvert.value=='dolar'){
    pCurrencyValue.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency:"BRL"
     }).format(inputCurrencyValue*dolarRealToday)
}else if(currencySelectValue.value=="euro" && currencySelectToConvert.value=='dolar'){
    pCurrencyValue.innerHTML = new Intl.NumberFormat("de-DE",{
        style: "currency",
        currency:"EUR"
     }).format(inputCurrencyValue*dolarEuroToday)
}


if(currencySelectToConvert.value=='real'){
 pCurrencyValueToConvert.innerHTML= new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency:"BRL"
 }).format(inputCurrencyValue)
}else if(currencySelectToConvert.value=='dolar'){
    pCurrencyValueToConvert.innerHTML= new Intl.NumberFormat("en-IN", {
       style: "currency",
       currency:"USD"
    }).format(inputCurrencyValue)
   }

 
}

function trocarImg(){
   const currencyName = document.getElementById('currency-name')
   const logoImg = document.getElementById('logoUSA')
   const logoToConvert = document.getElementById('logo-to-convert')
   const currencyNameToConvert = document.getElementById('currency-to-convert-name')
   if(currencySelectToConvert.value=='dolar'){
    logoToConvert.src="./assets/EstadosUnidos.png"
    currencyNameToConvert.innerHTML='Dólar Americano'
   }else if(currencySelectToConvert.value=='real'){
    logoToConvert.src="./assets/Brasil.png"
    currencyNameToConvert.innerHTML='Real'
   }

   if(currencySelectValue.value=='dolar'){
   currencyName.innerHTML='Dólar Americano'
   logoImg.src="./assets/EstadosUnidos.png"
}else if (currencySelectValue.value=='euro'){
    currencyName.innerHTML='Euro'
    logoImg.src='./assets/Euro.png' 
}else if (currencySelectValue.value=='real'){
    currencyName.innerHTML='Real'
    logoImg.src='./assets/Brasil.png'
    
}
convertValues()
}
convertButtom.addEventListener('click', convertValues)
currencySelectValue.addEventListener('change', trocarImg)
currencySelectToConvert.addEventListener('change', trocarImg)
