import CDTUnitaria from '../tabelle/CDTUnitaria/CDTUnitaria';
import tabellaPortataCavoIo from '../tabelle/Portata_cavo_Io/Portata_cavoIo';
import tabellaFattoriInstallazione from '../tabelle/Fattore_installazione/Fattore_installazione';
import tabellaFattoreTemperatura from '../tabelle/Fattore_temperatura/Fattore_temperatura';
import tabellaFattoreTerreno from '../tabelle/Fattore_tipo_tirreno';
import tabellaFattoreProfonditaPosa from '../tabelle/Fattore_profondita_posa';
import tabellaFattoreDistanzaTraTubi from '../tabelle/Fattore_distanza_tra_tubi';

const calcoloSezione = (formData) => {

  const {Uammissibile, Unom, correnteDImpiego, lunghezza,numeroConduttoriAttivi, fattorePotenza, tipoIsolamento, tipoPosa, numeroCircuitiAdiacenti, temperaturaAmmissibile, resistivitaTermica ,distanzaTraTubi, profonditaPosa} = {...formData};

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
    let sezioneAmmissibile = 0;

    for (let i = 0; i < CDTUnitaria.length; i++) {

      const item = CDTUnitaria[i]
      const CDT = parseFloat(item[keyForCDTUnitaria] )
      if(CDT < CDTammissibile) {
        // sezioneAmmissibile.index = i;
        sezioneAmmissibile = item.Sezione;
        break;
      }
    }

    return sezioneAmmissibile;
  }

  const getCorrenteIo = (sezione) => {
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
    const fattoreTemperatura = tabellaFattoreTemperatura[key];

    return fattoreTemperatura;
  }

  const getSezioneAggiornata = (sezione, sezioni) => {
    let sezioneAggiornata = sezioni[sezioni.indexOf(parseFloat(sezione) ) + 1];

    return sezioneAggiornata;
  }

  const getFattoreTipoTerreno = () => {
    let fattoreTipoTerreno = tabellaFattoreTerreno[resistivitaTermica]; debugger;

    return fattoreTipoTerreno;
  }

  const getFattoreProfonditaPosa = () => {
    let fattoreProfonditaPosa = tabellaFattoreProfonditaPosa[profonditaPosa];

    return fattoreProfonditaPosa;
  }

  const getFattoreDistanzaTraTubi = () => {
    const key = `${numeroCircuitiAdiacenti}-${distanzaTraTubi}`; debugger
    let fattoreDistanzaTraTubi = tabellaFattoreDistanzaTraTubi[key];

    return fattoreDistanzaTraTubi;
  }

  const calcPortataLineaAmmissibile = (sezione) => {
    const sezioneAmmissibile = getSezioneAmmissibile();
    const sezionePerCalcoloIo = sezione ? sezione : sezioneAmmissibile;
    const Io = getCorrenteIo(sezionePerCalcoloIo);
    const sezioni = tabellaPortataCavoIo[0].sezioni;
    const K1 = getFattoreInstallazione();
    const K2 = getFattoreTemperatura();
    const K3 = getFattoreTipoTerreno();
    const K4 = getFattoreProfonditaPosa();
    const K5 = getFattoreDistanzaTraTubi();
    
    // Il calcolo della corrente che soddisfa dei fattori
    let Iz; debugger;
    if(tipoPosa === 'D') { 
      Iz = K2 * K3 * K4 * K5
    }
    else { Iz = Io * K1 * K2 }

    const result = Iz >= correnteDImpiego ? sezionePerCalcoloIo : 
      calcPortataLineaAmmissibile(getSezioneAggiornata(sezionePerCalcoloIo, sezioni) ) 
			
    return result;
  }

  calcPortataLineaAmmissibile();

}

export default calcoloSezione;