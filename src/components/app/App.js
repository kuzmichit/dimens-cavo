import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ParametriIniziali from '../parametri_iniziali/parametri_iniziali';
import TipoCavo from '../Tipo_cavo'
import TipoPosa from '../Tipo_posa'
import { useState } from 'react';

function App() {
  const [current, setCurrent] = useState(0)
	
  return (
    <div className = "_container">
      {/* <header className = "header mb-3">
        <h1 className = 'p-1  text-center fs-3'>Calcolo sezione dei cavi elettrici</h1>
      </header> */}
      <main className = 'main'>
        { <ParametriIniziali
          current = { current }
          setCurrent = { setCurrent }/> }
        { <TipoCavo/>}
        <TipoPosa/>
      </main>
      {/* <footer>
        <div className = "_navbar mt-3 fixed-bottom">
          <button className = 'btn-prev'>Indietro</button><button className = 'btn-next'>Avanti</button>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
