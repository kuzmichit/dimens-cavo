import Form from 'react-bootstrap/Form';

const TipoCavo = () => {
  return (
    <div className = "ms-5 mt-5">
      <h2 className = ''>Tipo di cavo</h2>
      <Form className = '' id = 'tipoCavo'> 
        <Form.Group className = "mb-3 mt-5 w-75">
          <Form.Label className = 'ps-2 '>Formazione</Form.Label>
          <Form.Select aria-label = "formazione" id = 'formazione'>
            <option value = "unipolare">unipolare</option>
            <option value = "multipolare">multipolare</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className = "mb-3 mt-5 w-75">
          <Form.Label className = 'ps-2 '>Tipo di isolamento</Form.Label>
          <Form.Select aria-label = "tipo di isolamento" id = 'isolamento'>
            <option value = "epr">EPR</option>
            <option value = "pvc">PVC</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className = "mb-3 mt-5 w-75">
          <Form.Label className = 'ps-2 '>Numero di conduttori attivi</Form.Label>
          <Form.Select aria-label = "numero di conduttori attivi" id = 'conduttori'>
            <option value = "2">2</option>
            <option value = "3">3</option>
            <option value = "4">4</option>
          </Form.Select>
        </Form.Group>
      </Form>
    </div>
  )
}

export default TipoCavo;