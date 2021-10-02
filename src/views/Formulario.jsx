import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert'

const Formulario = () => {

    const [formulario, setFormulario] = useState({
        name:'',
        lastName:'',
        email:'',
        confirmPassword:'',
        password:''
    });

    const [validador, setValidador] = useState({
        name:'',
        lastName:'',
        email:'',
        confirmPassword:'',
        password:''
    });

    const cambioEstado = (e) => {

        setFormulario({...formulario,[e.target.name]:e.target.value});
        console.log("Formulario" + JSON.stringify(formulario));

    }

    const validarDatos = (e) => {
        let mensaje = '';
        if (e.target.value != '') {

            switch (e.target.name) {
                case 'name':
                case 'lastName':   
                    if (e.target.value.length < 2) {
                        mensaje = 'el campo debe tener mínimo 2 caracteres.';
                    }
                    break;
                case 'email':
                    if (e.target.value.length < 5) {
                        mensaje = 'el campo debe tener mínimo 5 caracteres.';
                    }
                    break;
                case 'password':
                    if (e.target.value.length < 8) {
                        mensaje = 'el campo debe tener mínimo 8 caracteres.';
                    }
                    break;
                case 'confirmPassword':
                    if (e.target.value.length < 8) {
                        mensaje = 'el campo debe tener mínimo 8 caracteres.';
                    }
                    if (e.target.value != formulario.password) {
                        mensaje = 'las contraseñas deben coincidir';
                    }
                    
                    break;
                default:
                    mensaje = '';
            }
            
        }
        
        setValidador({...validador, [e.target.name]:mensaje})
        console.log("validador" + JSON.stringify(validador));

    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>Ingresar Datos</Card.Title>
                <Card.Text>
                <Form>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Nombre:
                        </Form.Label>
                        <Col sm="5">
                        <Form.Control type="text" placeholder="Nombre" name='name' value={formulario.name} onChange={cambioEstado} onBlur={validarDatos} />
                        </Col>
                    </Form.Group>

                    {
                        validador.name?
                        <Alert variant='danger'>{validador.name}</Alert> :
                        ''
                    }
                    
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Apellido:
                        </Form.Label>
                        <Col sm="5">
                        <Form.Control type="text" placeholder="Apellido" name='lastName'  value={formulario.lastName} onChange={cambioEstado} onBlur={validarDatos} />
                        </Col>
                    </Form.Group>

                    {
                        validador.lastName?
                        <Alert variant='danger'>{validador.lastName}</Alert> :
                        ''
                    }

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Email:
                        </Form.Label>
                        <Col sm="5">
                        <Form.Control type="email" placeholder="Email" name='email'  value={formulario.email} onChange={cambioEstado} onBlur={validarDatos} />
                        </Col>
                    </Form.Group>
                    
                    {
                        validador.email?
                        <Alert variant='danger'>{validador.email}</Alert> :
                        ''
                    }

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Contraseña:
                        </Form.Label>
                        <Col sm="5">
                        <Form.Control type="password" placeholder="Contraseña" name='password'  value={formulario.password} onChange={cambioEstado} onBlur={validarDatos} />
                        </Col>
                    </Form.Group>

                    {
                        validador.password?
                        <Alert variant='danger'>{validador.password}</Alert> :
                        ''
                    }

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Confirmar Contraseña:
                        </Form.Label>
                        <Col sm="5">
                        <Form.Control type="password" placeholder="Confirmar Contraseña" name='confirmPassword'  value={formulario.confirmPassword} onChange={cambioEstado} onBlur={validarDatos} />
                        </Col>
                    </Form.Group>

                    {
                        validador.confirmPassword?
                        <Alert variant='danger'>{validador.confirmPassword}</Alert> :
                        ''
                    }

                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
                </Card.Text>
            </Card.Body>
        </Card>

        
    );
}

export default Formulario;