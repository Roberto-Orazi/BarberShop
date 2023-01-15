import {Container, Row, Col} from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import tijera from "../Archivos/Imagenes/tijerasola.png"
import navajasola from "../Archivos/Imagenes/navajasolablanca.png"
import navaja from "../Archivos/Imagenes/navajablanca.png"
const Servicios = () => {
    const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);
  const [showC, setShowC] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);
  const toggleShowC = () => setShowC(!showC);
    return(
        
        <Container id='Servicios' className='Servicios-Container'>
            <Row className='Servicios-Row'>
                <Col className='Servicios-Col'>
                    <Button onClick={toggleShowA} active>
                <a><b>01.CORTE CLASICO</b></a>
                </Button>
                <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src={tijera}
              className="rounded me-2"
              alt=""
            /><br/>
            <strong className="me-auto">Este servicio incluye:</strong>
            <br/>
            <small>-Corte de pelo</small>
            <br/>
            <small>-Afeitada con maquina</small>
          </Toast.Header>
          <Toast.Body></Toast.Body>
        </Toast>
                </Col>
                <Col className='Servicios-Col'>
                    <Button onClick={toggleShowB} active>
                <a><b>02.CORTE PREMIUM</b></a>
                </Button>
                <Toast show={showB} onClose={toggleShowB}>
          <Toast.Header>
            <img
              src={navaja}
              className="rounded me-2"
              alt=""
            /><br/>
            <strong className="me-auto">Este servicio incluye:</strong>
            <br/>
            <small>-Corte Clasico</small>
            <br/>
            <small>-Afeitada Premium</small>
          </Toast.Header>
          <Toast.Body></Toast.Body>
        </Toast>
                </Col>
                <Col className='Servicios-Col'>
                    <Button onClick={toggleShowC} active>
                <a><b>03.AFEITADO PREMIUM</b></a>
                </Button>
                <Toast show={showC} onClose={toggleShowC}>
          <Toast.Header>
            <img
              src={navajasola}
              className="navajasola rounded me-2"
              alt=""
            /><br/>
            <strong className="me-auto">Este servicio incluye:</strong>
            <br/>
            <small>-Afeitado con Navaja</small>
            <br/>
            <small>-Preparacion facial para afeitar con los mejores productos.</small>
          </Toast.Header>
          <Toast.Body></Toast.Body>
        </Toast>
                </Col>
                
            </Row>
        
    </Container>
    )
}

export default Servicios;