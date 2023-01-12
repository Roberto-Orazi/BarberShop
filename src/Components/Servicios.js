import {Container, Row, Col} from 'react-bootstrap'
import CorteClasico from './CorteClasico';
import Afeitado from './Afeitado';
import CortePremium from './CortePremium';

const Servicios = () => {
    return(
        <Container id='Servicios' className='Servicios-Container'>
            <Row className='Servicios-Row'>
                <Col className='Servicios-Col'>
                <a href={CorteClasico}><b>01.CORTE CLASICO</b></a>
                </Col>
                <Col className='Servicios-Col'>
                <a href={CortePremium}><b>02.CORTE PREMIUM</b></a>
                </Col>
                <Col className='Servicios-Col'>
                <a href={Afeitado}><b>03.AFEITADO PREMIUM</b></a>
                </Col>
            </Row>
        
    </Container>
    )
}

export default Servicios;