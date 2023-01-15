import {Container, Row, Col} from 'react-bootstrap'

const Inicio = () => {
    return(
        <Container id='Inicio' className='Inicio-Container'>
        <Row className='Inicio-Row'>
            <Col className='Info-Col'>
            <h2>SACA TU <span className='spantext'>TURNO</span></h2>
            <p>Veni a mejorar tu look!</p>
            <a href='#Contacto' className='Btn-Inicio'>
            <i class="fa-solid fa-circle-chevron-down"></i>
            </a>
            </Col>
           
        </Row>
    </Container>
    )
}

export default Inicio;