import './parametri_iniziali.css' 

// import Form from 'react-bootstrap/Form';

// const ParametriIniziali = () => {
	
//   return (
//     <> 
//       <h2>Hello</h2>
//       <Form.Label htmlFor = "inputPardiAlimentazione">Parametri di alimentazione</Form.Label>
//       <Form.Text id = "ULinea" muted>
//         Your password must be 8-20 characters long, contain letters and numbers,
//         and must not contain spaces, special characters, or emoji.
//       </Form.Text> 
//     </>
//   );
// }

// export default ParametriIniziali;

import Form from 'react-bootstrap/Form';

function FormTextExample() {
  return (
    <>
      <Form.Label htmlFor = "inputPassword5">Password</Form.Label>
      <Form.Control
        type = "password"
        id = "inputPassword5"
        aria-describedby = "passwordHelpBlock"
      />
      <Form.Text id = "passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
    </>
  );
}

export default FormTextExample;