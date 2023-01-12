import {Container, Col, Row} from 'react-bootstrap'
import foto1 from '../Archivos/Imagenes/foto1.JPG'
import foto2 from '../Archivos/Imagenes/foto2.JPG'
import foto3 from '../Archivos/Imagenes/foto3.JPG'
import foto4 from '../Archivos/Imagenes/foto4.JPG'
import foto5 from '../Archivos/Imagenes/foto5.JPG'
import foto6 from '../Archivos/Imagenes/foto6.JPG'

const Galeria =()=>{
    return(
        <Container id='Galeria' className='Galeria-Container'>
            <Col className='Galeria-Col'>
                <Row className='Galeria-Row'>
              <Col className='Titulo-Col'>
                <Row className='Titulo-Row'>
                <span>LA MEJOR EXPERIENCIA</span>
                <h2>GALERIA</h2>
                </Row>
                </Col></Row>
                <Row className='Galeria-Row'>
                <Row className='Fotos-Row'>
                    <Col className='Fotos-Col'><img src={foto1}></img></Col>
                    <Col className='Fotos-Col'><img src={foto3}></img></Col>
                    <Col className='Fotos-Col'><img src={foto2}></img></Col>
                    
                </Row>
                <Row className='Fotos-Row'>
                    <Col className='Fotos-Col'><img src={foto4}></img></Col>
                    <Col className='Fotos-Col'><img src={foto6}></img></Col>
                    <Col className='Fotos-Col'><img src={foto5}></img></Col>
                </Row>
                </Row>
                </Col>
        </Container>
    )
}
export default Galeria;