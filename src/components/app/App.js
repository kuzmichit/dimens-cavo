import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import FormTextExample from '../parametri_iniziali/parametri_iniziali';

function App() {
	
  return (
    <div className = "app">
      <header className = "header">
        <h1>Calcolo sezione dei cavi elettrici</h1>
      </header>
      <main>
        <FormTextExample/>
      </main>
    </div>
  );
}

export default App;
