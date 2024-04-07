import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ParametriIniziali from '../parametri_iniziali/parametri_iniziali';

function App() {
	
  return (
    <div className = "w-75 m-auto">
      <header className = "header">
        <h1 className = 'mt-5'>Calcolo sezione dei cavi elettrici</h1>
      </header>
      <main>
        <ParametriIniziali/>
      </main>
    </div>
  );
}

export default App;
