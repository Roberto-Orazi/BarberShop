import {Container, Col, Row, Nav, NavLink} from 'react-bootstrap'
import logo from "../Archivos/Imagenes/logoblanco.png"
const NavBar = () =>{
    return(
        <Container className='Nav-Container'>
            <Row className='Nav-Row'>
                <Col><h1><img className='logo' alt="peluqueria" src={logo}></img></h1></Col>
                <Col>
                <Nav className='responsive'>
                    <NavLink href='#Inicio'>Inicio</NavLink>
                    <NavLink href='#Servicios'>Servicios</NavLink>
                    <NavLink href='#Galeria'>Galeria</NavLink>
                    <NavLink href='#Contacto'>Contacto</NavLink>
                    
                    
                </Nav>
                </Col>
                
                <Col id="icono-nav" className="Nav-Responsive" onclick="mostrarOcultarMenu()">
                <i class="fa-solid fa-bars"></i>
                </Col>
                
            </Row>
        </Container>

    )
}

export default NavBar;