import Form from 'react-bootstrap/Form';
import calcoloSezione from '../../calcoli/calcolo_sezione';
import './style.css';
import useAutoClick from '../../calcoli/auto_click_hook';

const TipoPosa = ( {formData, selectChangeHandler} ) => {

  const buttonRef = useAutoClick(); 
	
  const onCalcSezioneClick = () => {
    calcoloSezione(formData); // Passiamo formData come argomento
  };
  
  return (
    <div className = "ms-5 mt-5">
      <h2 className = ''>Tipo di posa</h2>
      <Form className = '' id = 'tipoPosa'> 	
        <Form.Group className = "mb-3 mt-5 w-75">
          <Form.Label className = 'ps-2 '>Posa</Form.Label>
          <Form.Select aria-label = "posa"
            name = 'tipoPosa'
            onChange = { selectChangeHandler }>
            <option value = "A">in tubi circolari entro muri isolanti o nella muratura</option>
            <option value = "B">su pareti o passerelle non perforate </option>
            <option value = "C">su passerelle perforate </option>
            <option value = "D">in tubi o cunicoli interrati </option>
            <option value = "E">fissati da collari</option>
            <option value = "F">su mensole</option>
            <option value = "G">conduttori nudi o cavi senza guaina su isolatori</option>          
          </Form.Select>
        </Form.Group>
        <Form.Group className = "mb-3 mt-5 w-75">
          <Form.Label className = 'ps-2 '>Numero circuiti adiacenti</Form.Label>
          <Form.Select aria-label = "circuiti adiacenti"
            name = 'numeroCircuitiAdiacenti'
            onChange = { selectChangeHandler }>
            <option value = "1">1</option>
            <option value = "2">2</option>
            <option value = "3">3</option>
            <option value = "4">4</option>
            <option value = "5">5</option>
            <option value = "6">6</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className = "mb-3 mt-5 w-75">
          <Form.Label className = 'ps-2 '>Temperatura ammissibile</Form.Label>
          <Form.Select aria-label = "temperatura__ammissibile"
            name = 'temperaturaAmmissibile'
            onChange = { selectChangeHandler }>
            <option value = "30">30</option>
            <option value = "35">35</option>
            <option value = "40">40</option>
          </Form.Select>
        </Form.Group>
        <div className = "d-grid mt-5">
          <button type = "button" ref = { buttonRef }
            className = "btn btn-info w-75"
            onClick = { onCalcSezioneClick }>Calcolare la sezione</button>
        </div>
      </Form>
      {<p className = 'fs-2'>La sezione consigliata da posare è <span className = 'text-danger fs-1'>{formData.sezioneDefinitiva} </span>mmq </p>}
    </div>
  )
}

export default TipoPosa;