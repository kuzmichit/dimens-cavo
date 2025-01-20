import './parametri_iniziali.css' 

import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import {calcCorrenteDImpiego, isNumber} from '../../calcoli/formule';

const ParametriIniziali = ( {formData, setFormData} ) => {

  // const {formData, setFormData} = props;

  const formInputsHandler = (e) => {
    const {name, value} = e.target;
    if(!isNumber(value) && value !== '') return ;
    if(value > 1 && name === 'fattorePotenza') return;
    if(value > 4 && name === 'Uammissibile') {
      alert('Il valore massimo è 4%')
      
      return;
    }
		
    let timeout
    clearTimeout(timeout);
    timeout = setTimeout( () => calcolatoreCorrente( {...formData, [name]: value } ), 500);
    setFormData( (prevState) => ( { ...prevState, [name]: value } ) );
  };
		
  const calcolatoreCorrente = ( {lunghezza, potenza, Unom, Uammissibile, fattorePotenza} ) => {

    if(lunghezza && potenza && fattorePotenza && Uammissibile) {
      let correnteDImpiego = calcCorrenteDImpiego(potenza, Unom, fattorePotenza)

      setFormData(prevState => ( {...prevState, correnteDImpiego} ) )
    }

  }
	
  const RisultatoCorrente = () => {
		
    return ( 
      <h3 className = "result text-center">Il carico della linea è 
        <span className = 'text-primary'> {formData.correnteDImpiego} </span>A
      </h3>
    )
  }
  
  return (
    <div className = 'parametri-iniziali-container'>
      <h2 className = ''>Parametri iniziali</h2>
      <Form className = '' id = 'parametri_iniziali'> 
        <Form.Group className = "mb-3 mt-3  w-100">
          <Form.Label className = 'ps-2 '>Tensione di linea (volt)</Form.Label>
          <Form.Select 
            aria-label = "La tensione di linea (volts)"
            name = 'Unom'
            onChange = { formInputsHandler }>
            <option name = '230' value = "230">230 V</option>
            <option name = '400' value = "400">400 V</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className = "mb-3 mt-1  w-100">
          <Form.Label className = 'ps-2 '>Lunghezza di linea (m)</Form.Label>
          <Form.Control type = "number"
            name = "lunghezza"
            required
            value = { formData.lunghezza }
            onChange = { (e) => formInputsHandler(e) }
          />
        </Form.Group>
        <Form.Group className = "mb-3 mt-1  w-100">
          <Form.Label className = 'ps-2 '>Potenza elettrica del carico (watt)</Form.Label>
          <Form.Control type = "number"
            name = 'potenza' 
            required
            value = { formData.potenza }
            onChange = { (e) => formInputsHandler(e) }
          />
        </Form.Group>
        <Form.Group className = "mb-3 mt-1  w-100">
          <Form.Label className = 'ps-2 '>Fattore di potenza (%)</Form.Label>
          <Form.Control type = "number"
            name = 'fattorePotenza' 
            required
            value = { formData.fattorePotenza }
            onChange = { (e) => formInputsHandler(e) }
          />
        </Form.Group>
        <Form.Group className = "mb-3 mt-1  w-100">
          <Form.Label className = 'ps-2 '>Caduta di tensione ammissibile (%)</Form.Label>
          <Form.Control type = "number" 
            max = { 4 }
            required
            name = 'Uammissibile'
            value = { formData.Uammissibile }
            onChange = { (e) => formInputsHandler(e) }
          />
        </Form.Group>
        <RisultatoCorrente/>
      </Form>
    </div>
  );
	
}

export default ParametriIniziali;
