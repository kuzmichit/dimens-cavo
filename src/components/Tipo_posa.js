import Form from 'react-bootstrap/Form';

const TipoPosa = () => {
  return (
    <div className = "ms-5 mt-5">
      <h2 className = ''>Tipo di posa</h2>
      <Form className = '' id = 'tipoPosa'> 
        <Form.Group className = "mb-3 mt-5 w-75">
          <Form.Label className = 'ps-2 '>Posa</Form.Label>
          <Form.Select aria-label = "posa" id = 'posa'>
            <option value = "interrato">Interrato</option>
            <option value = "multipolare">multipolare</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className = "mb-3 mt-5 w-75">
          <Form.Label className = 'ps-2 '>Numero circuiti adiacenti</Form.Label>
          <Form.Select aria-label = "circuiti adiacenti" id = 'num-adiacenti'>
            <option value = "2">2</option>
            <option value = "3">3</option>
            <option value = "4">4</option>
            <option value = "5">5</option>
            <option value = "6">6</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className = "mb-3 mt-5 w-75">
          <Form.Label className = 'ps-2 '>Temperatura ammissibile</Form.Label>
          <Form.Select aria-label = "temperatura__ammissibile" id = 'temperatura__ammissibile'>
            <option value = "30">30</option>
            <option value = "35">35</option>
            <option value = "40">40</option>
          </Form.Select>
        </Form.Group>
      </Form>
    </div>
  )
}

export default TipoPosa;