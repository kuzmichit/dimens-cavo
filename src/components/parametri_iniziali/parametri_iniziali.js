import './parametri_iniziali.css' 

import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';

const ParametriIniziali = () => {

  const [Unom, setUnom] = useState(0)
  const [lunghezza, setLunghezza] = useState('')
  const [potenza, setPotenza] = useState('');
  const [fattorePotenza, setFattorePotenza] = useState('');
  const [Uammissibile, setUammissibile] = useState('');

  const IsNumber = (value) => {
    let regExpIsNotNumber = (/\D/g);
    
    return regExpIsNotNumber.test(value);
  };

  const parametriFormHandler = (e) => {
    let value = e.target.value;
    if(IsNumber(value) ) return ;
    console.log(e.target.id);

    switch(e.target.id) {
    case 'Unom' : setUnom(value); break; 
    case 'lunghezza' : setLunghezza(value); break;
    case 'potenza' : setPotenza(value); break;
    case 'fattore_potenza' : setFattorePotenza(value); break;
    case 'tensione_ammissibile' : setUammissibile(value); break;
    }

  };

  const inputFieldHandler = (e) => {
    let value = e.target.value;
    
    return IsNumber(value); 
  }

  const onInputLunghezza = (e) => {
    if(inputFieldHandler(e) ) setLunghezza(value) 
  }

  const onInputPotenza = (e) => {
    if(inputFieldHandler(e) ) setPotenza(value) 
  }

  const onInputFattorePotenza = (e) => {
    if(inputFieldHandler(e) ) setFattorePotenza(value) 
  }

  const onInputUammissibile = (e) => { 
    if(inputFieldHandler(e) ) setUammissibile(value) 
  }
	
  const calcolatoreCorrente = (params) => {
		
  }
  
  return (
    <div className = 'parametri-iniziali-container'>
      <h2 className = ''>Parametri iniziali</h2>
      <Form className = '' id = 'parametri_iniziali'
        onChange = { parametriFormHandler }> 
        <Form.Group className = "mb-3 mt-3  w-100">
          <Form.Label className = 'ps-2 '>Tensione di linea (volt)</Form.Label>
          <Form.Select 
            aria-label = "La tensione di linea (volts)"
            id = 'Unom'>
            <option value = "230">230 V</option>
            <option value = "400">400 V</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className = "mb-3 mt-1  w-100 controlId=''">
          <Form.Label className = 'ps-2 '>Lunghezza di linea (m)</Form.Label>
          <Form.Control type = "input"
            id = "lunghezza"
            required
            value = { lunghezza }
            onChange = { onInputLunghezza }
          />
        </Form.Group>
        <Form.Group className = "mb-3 mt-1  w-100">
          <Form.Label className = 'ps-2 '>Potenza elettrica del carico (watt)</Form.Label>
          <Form.Control type = "input"
            id = 'potenza' 
            required
            value = { potenza }
          />
        </Form.Group>
        <Form.Group className = "mb-3 mt-1  w-100">
          <Form.Label className = 'ps-2 '>Fattore di potenza (%)</Form.Label>
          <Form.Control type = "input"
            required
            id = 'fattore_potenza'
            value = { fattorePotenza }/>
        </Form.Group>
        <Form.Group className = "mb-3 mt-1  w-100">
          <Form.Label className = 'ps-2 '>Caduta di tensione ammissibile (%)</Form.Label>
          <Form.Control type = "input" 
            required
            id = 'caduta_tensione'
            value = { Uammissibile }

          />
        </Form.Group>
      </Form>
      <h3 className = "result ms-5">Il carico della linea è {lunghezza}A</h3>
    </div>
  );
}

export default ParametriIniziali;

// import Form from 'react-bootstrap/Form';

// function FormTextExample() {
//   return (
//     <>
//       <Form.Label htmlFor = "inputPassword5">Password</Form.Label>
//       <Form.Control
//         type = "password"
//         id = "inputPassword5"
//         aria-describedby = "passwordHelpBlock"
//       />
//       <Form.Text id = "passwordHelpBlock" muted>
//         Your password must be 8-20 characters long, contain letters and numbers,
//         and must not contain spaces, special characters, or emoji.
//       </Form.Text>
//     </>
//   );
// }

// export default FormTextExample;