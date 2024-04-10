import './parametri_iniziali.css' 

import Form from 'react-bootstrap/Form';

const ParametriIniziali = () => {
	
  return (
    <Form className = 'ms-5' id = 'parametri_iniziali'> 
      <Form.Group className = "mb-3 mt-5 w-75">
        <Form.Label className = 'ps-2 '>Tensione di linea (volt)</Form.Label>
        <Form.Select aria-label = "La tensione di linea (volts)" id = 'Unom'>
          <option value = "230">230 V</option>
          <option value = "400">400 V</option>
        </Form.Select>
        <span>hello</span>
      </Form.Group>
      <Form.Group className = "mb-3 mt-1 w-75" controlId = "">
        <Form.Label className = 'ps-2 '>Lunghezza di linea (m)</Form.Label>
        <Form.Control type = "input" placeholder = "10" />
      </Form.Group>
      <Form.Group className = "mb-3 mt-1 w-75" controlId = "">
        <Form.Label className = 'ps-2 '>Potenza elettrica del carico (watt)</Form.Label>
        <Form.Control type = "input" placeholder = "100" />
      </Form.Group>
      <Form.Group className = "mb-3 mt-1 w-75" controlId = "">
        <Form.Label className = 'ps-2 '>Caduta di tensione ammissibile (%)</Form.Label>
        <Form.Control type = "input" defaultValue = '4' />
      </Form.Group>
    </Form>
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