import Form from 'react-bootstrap/Form';
import calcoloSezione from '../../calcoli/calcolo_sezione';
import './style.css';
import useAutoClick from '../../calcoli/auto_click_hook';

const TipoPosa = ( {formData, selectChangeHandler} ) => {

  const buttonRef = useAutoClick(); 
  const {tipoPosa} = {...formData}
  const contentPosaInterrata = tipoPosa === 'D' ? <PosaInterrata selectChangeHandler = { selectChangeHandler } /> : null;

  const onCalcSezioneClick = () => {
    calcoloSezione(formData); // Passiamo formData come argomento
  };
  
  return (
    <div className = "ms-5 mt-5">
      <h2 className = ''>Tipo di posa</h2>
      <Form className = '' id = 'tipoPosa'> 	
        <Form.Group className = "mb-3 mt-5 w-75">
          <Form.Label className = 'ps-2 '>Tipo di posa</Form.Label>
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
        {contentPosaInterrata}

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
            <option value = "6">7</option>
            <option value = "6">8</option>
            <option value = "6">9</option>
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
            <option value = "40">45</option>
            <option value = "40">50</option>
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

const PosaInterrata = (selectChangeHandler) => {
  return (<>
    <Form.Group className = "mb-3 mt-5 w-75">
      <Form.Label className = 'ps-2 '>Resistivita termica</Form.Label>
      <Form.Select aria-label = "resistivita_termica"
        name = 'resistivitaTermica'
        onChange = { selectChangeHandler }>
        <option value = "terreno-1">Terreno compatto con normale contenuto di umidità o argillosa</option>
        <option value = "terreno-2">Terreno con basso contenuto di umidità</option>
        <option value = "sabbia-3">Sabbia asciutta</option>
        <option value = "mattoni-1,15">Mattoni</option>
        <option value = "calcestruzzo-1,1">Calcestruzzo</option>
      </Form.Select>
    </Form.Group>
    <Form.Group className = "mb-3 mt-5 w-75">
      <Form.Label className = 'ps-2 '>Distanza tra tubi adiacenti(m)</Form.Label>
      <Form.Select aria-label = "distanza_tubi"
        name = 'distanzaTraTubi'
        onChange = { selectChangeHandler }>
        <option value = "aContatto">A contatto</option>
        <option value = "0,25">Distanziati 25cm</option>
      </Form.Select>
    </Form.Group>
    <Form.Group className = "mb-3 mt-5 w-75">
      <Form.Label className = 'ps-2 '>Profondita di posa(m)</Form.Label>
      <Form.Select aria-label = "profondita_posa"
        name = 'profonditaPosa'
        onChange = { selectChangeHandler }>
        <option value = "0,5">0,5</option>
        <option value = "0,8">0,8</option>
        <option value = "1">1</option>
        <option value = "1,2">1,2</option>
        <option value = "1,5">1,5</option>
      </Form.Select>
    </Form.Group>
  </>
	
  )
}

export default TipoPosa;