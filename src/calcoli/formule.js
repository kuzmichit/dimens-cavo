//  # Le formule per calcolare diversi parametri per la scelta del cavo 

const arrotondamentoNumero = (num, digit = 100) => {
  return Math.round(num * digit) / digit
}

export const isNumber = (value) => {
  let regExpIsNumber = /^(0(\.\d+)?|[1-9]\d*(\.\d+)?)$/;
  let res = regExpIsNumber.test(value);

  return res;
};

export const calcCorrenteDImpiego = (potenza, Unom, fattorePotenza) => {
  let correnteDImpiego = 0;
  if(Unom === '230') correnteDImpiego = potenza / (Unom * fattorePotenza)
  if(Unom === '400') correnteDImpiego = potenza / (Unom * fattorePotenza * Math.sqrt(3) )

  correnteDImpiego = arrotondamentoNumero(correnteDImpiego)
  
  return correnteDImpiego;
}

export const calcCDTunitaria = (Uammissibile, Unom) => {
  return (Uammissibile * Unom)/ 100 
}

export const clickOnButton = (button) => {
  const event = new Event('click');

  button.dispatchEvent(event);
}