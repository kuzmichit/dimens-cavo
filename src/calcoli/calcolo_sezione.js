import CDTUnitaria from '../tabelle/CDTUnitaria/CDTUnitaria';
import tabellaPortataCavoIo from '../tabelle/Portata_cavo_Io/Portata_cavoIo';
import tabellaFattoriInstallazione from '../tabelle/Fattore_installazione/Fattore_installazione';
import tabellaFattoreTemperatura from '../tabelle/Fattore_temperatura/Fattore_temperatura';

const calcoloSezione = (formData) => {

  const {Uammissibile, Unom, correnteDImpiego, lunghezza,numeroConduttoriAttivi, fattorePotenza, tipoIsolamento, tipoPosa, numeroCircuitiAdiacenti, temperaturaAmmissibile} = {...formData};

  let sezioneAmmissibile = 0;

  const calcCDTammissibile = ()=> {
	
    const deltaV = (Uammissibile * Unom)/100
    const CDTammissibile = (1000 * deltaV) / (correnteDImpiego * lunghezza);

    return CDTammissibile;
  }
 
  // La sezione che si ricava dalla tabella apposta usando la CDT unitaria calcolata in precedenza
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

    return sezioneAmmissibile;
  }

  const getCorrenteIo = ( {sezione} ) => {
    // La sezione che abbiamo trovato prima 
    let sezioneCalcolata = parseFloat(sezione);
    let correnteIo = null;
    const copyPortataCavoIo = tabellaPortataCavoIo.slice(1, -1);
    const key = `${tipoPosa}-${tipoIsolamento}-${numeroConduttoriAttivi}`
    // array delle correnti corrispondenti alla chiave 
    let rigaCorrenteTrovataIo = copyPortataCavoIo.find(item => item[key] );
    rigaCorrenteTrovataIo = rigaCorrenteTrovataIo[key];
    const indexSezione = tabellaPortataCavoIo[0]['sezioni'].findIndex(item => item === sezioneCalcolata);

    return correnteIo = rigaCorrenteTrovataIo[indexSezione];
  }

  const getFattoreInstallazione = () => {
    const fattoreInstallazione = tabellaFattoriInstallazione[numeroCircuitiAdiacenti];

    return fattoreInstallazione;
  }

  const getFattoreTemperatura = () => {
    const key = `${temperaturaAmmissibile}-${tipoIsolamento}`
    const fattoreTemperatura = tabellaFattoreTemperatura[key]; debugger

    return fattoreTemperatura;
  }

  const calcPortataLineaAmmissibile = () => {
    const sezioneAmmissibile = getSezioneAmmissibile();
    do {
      const Io = getCorrenteIo(sezioneAmmissibile);
      const sezioni = tabellaPortataCavoIo[0];
      const K1 = getFattoreInstallazione();
      const K2 = getFattoreTemperatura();
			
      // Il calcolo della corrente che soddisfa dei fattori
      const Iz = Io * K1 * K2; debugger;
      // const result = (Iz >= correnteDImpiego) ? sezioneCalcolata : 
    } while (Iz >= correnteDImpiego);
  }

  calcPortataLineaAmmissibile();

}

export default calcoloSezione;