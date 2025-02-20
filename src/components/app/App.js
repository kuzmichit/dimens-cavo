import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ParametriIniziali from '../parametri_iniziali/Parametri_iniziali';
import TipoCavo from '../Tipo_cavo';
import TipoPosa from '../tipo_posa/Tipo_posa';
import Buttons from '../Buttons';

import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState( {
    Unom: '230',
    lunghezza: '1',
    potenza: '',
    fattorePotenza: 1,
    Uammissibile: 4,
    correnteDImpiego: 'Non valida',
    formazione: 'unipolare',
    tipoIsolamento: 'PVC',
    numeroConduttoriAttivi: 2,
    tipoPosa: 'A',
    numeroCircuitiAdiacenti: 1,
    temperaturaAmmissibile: 30,
    sezioneDefinitiva: 0,
    resistivitaTermica: 'terreno-2',
    distanzaTraTubi: 'contatto',
    profonditaPosa: '0,5',
    testoButtonCalcoloSezione: 'Calcolare la sezione',
  } )

  const selectChangeHandler = (e) => {
    const {name, value} = e.target;
    setFormData( (prevState) => ( { ...prevState, [name]: value } ) );
  }
	
  // Array dei componenti delle pagine
  const pages = [ 
    <ParametriIniziali key = { 'parametriIniziali' }	
      formData = { formData } 
      setFormData = { setFormData } 
    />,
    <TipoCavo key = { 'tipoCavo' }
      formData = { formData } 
      setFormData = { setFormData }
      selectChangeHandler = { selectChangeHandler } />,
    <TipoPosa key = { 'tipoPosa' }
      formData = { formData } 
      setFormData = { setFormData }
      selectChangeHandler = { selectChangeHandler } 
    />]
	
  const [currentPage, setCurrentPage] = useState(0); // Indice della pagina corrente
	
  return (
    <div className = "_container">
      <header className = "header mb-3">
        <h1 className = 'p-1  text-center fs-3'>Calcolo sezione dei cavi elettrici</h1>
      </header>
      <main className = 'main'>
        {pages[currentPage]}
      </main>
      <footer>
        <Buttons
          formData = { formData }
          currentPage = { currentPage }
          setCurrentPage = { setCurrentPage }
          pagesLength = { pages.length }/>
      </footer>
    </div>
  );
}

export default App;
