//  # Le formule per calcolare diversi parametri per la scelta del cavo 

export const arrotondamentoNumero = (num, digit = 100) => {
  return Math.round(num * digit) / digit
}

export const calcCorrenteDImpiego = (potenza, Unom , fattorePotenza) => {
  let correnteDImpiego = 0;
  if(Unom === 230) correnteDImpiego = potenza / (Unom * fattorePotenza)
  else correnteDImpiego = potenza / (Unom * fattorePotenza * Math.sqrt(3) )

  return correnteDImpiego;
}

export const CDTunitaria = (Uammissibile, Unom) => {
  return (Uammissibile * Unom)/ 100 
}
