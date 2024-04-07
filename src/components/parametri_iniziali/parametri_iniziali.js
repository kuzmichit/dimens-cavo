import './parametri_iniziali.css' 

import Form from 'react-bootstrap/Form';

const ParametriIniziali = () => {
	
  return (
    <> 
      <Form.Group className = "mb-3" controlId = "formBasicEmail">
        <Form.Label htmlFor = "inputPardiAlimentazione">Parametri di alimentazione</Form.Label>
        <Form.Control type = "input" placeholder = "La tensione di linea" />
        <Form.Text id = "ULinea">
       
        </Form.Text> 
      </Form.Group>
    </>
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