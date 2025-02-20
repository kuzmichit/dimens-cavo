/* 
** se il cavo unipolare evitare la scelta dei conduttori attivi
*/

import Form from 'react-bootstrap/Form';
import { useEffect, useState, useRef } from 'react';

const TipoCavo = ( {formData, setFormData, selectChangeHandler} ) => {

  const [stateConduttoriAttivi, setStateConduttoriAttivi] = useState(true);
  const optionConduttori = useRef(null);

  const changeStateConduttoriAttivi = (e) => {
    if(e.target.value === 'unipolare') {
      setStateConduttoriAttivi(true)
      setFormData( (prevState) => ( {...prevState, ['numeroConduttoriAttivi']: 2 } ) )
      optionConduttori.current.value = '2';
    }
    else setStateConduttoriAttivi(false)
  }

  const formazioneChangeHandler = (e) => {
    selectChangeHandler(e);
    changeStateConduttoriAttivi(e)
  }

  return (
    <div className = "ms-5 mt-5">
      <h2 className = ''>Tipo di cavo</h2>
      <Form className = '' id = 'tipoCavo'> 
        <Form.Group className = "mb-3 mt-5 w-75">
          <Form.Label className = 'ps-2 '>Formazione</Form.Label>
          <Form.Select aria-label = "formazione"
            name = 'formazione'
            onChange = { formazioneChangeHandler }
          >
            <option value = "unipolare">unipolare</option>
            <option value = "multipolare">multipolare</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className = "mb-3 mt-5 w-75">
          <Form.Label className = 'ps-2 '>Tipo di isolamento</Form.Label>
          <Form.Select aria-label = "tipo di isolamento"
            name = 'tipoIsolamento'
            onChange = { selectChangeHandler }>
            <option value = "EPR">EPR</option>
            <option value = "PVC">PVC</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className = "mb-3 mt-5 w-75">
          <Form.Label className = 'ps-2 '>Numero di conduttori attivi</Form.Label>
          <Form.Select aria-label = "numero di conduttori attivi" disabled = { stateConduttoriAttivi }
            name = 'numeroConduttoriAttivi'
            onChange = { selectChangeHandler }
            ref = { optionConduttori }
          >
            <option value = "2">2</option>
            <option value = "3">3</option>
          </Form.Select>
        </Form.Group>
      </Form>
    </div>
  )
}

export default TipoCavo;