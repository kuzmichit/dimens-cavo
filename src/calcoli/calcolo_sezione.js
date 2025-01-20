import CDTUnitaria from '../tabelle/CDTUnitaria/CDTUnitaria';
import portataCavoIo from '../tabelle/Portata_cavo_Io/Portata_cavoIo.json';

const calcoloSezione = (formData) => {

  const {Uammissibile, Unom, correnteDImpiego, lunghezza,numeroConduttoriAttivi, fattorePotenza, tipoIsolamento, tipoPosa} = {...formData};

  console.log(formData);
  let sezioneAmmissibile = 0;

  const calcCDTammissibile = ()=> {
	
    const deltaV = (Uammissibile * Unom)/100
    const CDTammissibile = (1000 * deltaV) / (correnteDImpiego * lunghezza);

    return CDTammissibile;
  }
 
  const getSezioneAmmissibile = () => {
    const CDTammissibile = calcCDTammissibile();
    const keyForCDTUnitaria = `AC-${numeroConduttoriAttivi}P cosφ=${fattorePotenza}`;
    let indexSezioneAmmissibile = null;
    const sezioneAmmissibile = {};

    for (let i = 0; i < CDTUnitaria.length; i++) {

      const item = CDTUnitaria[i]
      const CDT = parseFloat(item[keyForCDTUnitaria] )
      if(CDT < CDTammissibile) {
        sezioneAmmissibile.index = i;
        sezioneAmmissibile.sezione = item.Sezione;
        break;
      }
    }
    console.log(sezioneAmmissibile);
    
    return sezioneAmmissibile;

  }

  const getCorrenteIo = (sezione) => {
    let correnteIo = null;
    const portataCavoIo = portataCavoIo.slice(1, -1);
    const key = `${tipoPosa}-${tipoIsolamento}-${numeroConduttoriAttivi}`

    return correnteIo = portataCavoIo[key];

  }
  const calcPortataLineaAmmissibile = () => {
    const sezioneAmmissibile = getSezioneAmmissibile();
    const Io = getCorrenteIo();
    const sezioni = portataCavoIo[0];
    // const K1 = getFattoreInstallazione();
    // const K2 = getFattoreTemperatura();
    
    // const Iz = Io * K1 * K2

    // const result = Iz >= correnteDImpiego
  }
}

export default calcoloSezione;