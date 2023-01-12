import {Container, Row, Col} from 'react-bootstrap'
import perfil from "../Archivos/Imagenes/fotoperfil.JPG"
import logo from "../Archivos/Imagenes/logoblanco.png"
const Contacto = () => {
    return(
      <Container id='Contacto' className='Contacto-Container'>
      <Col className='Galeria-Col'>
          <Row className='Galeria-Row'>
        <Col className='Titulo-Col'>
          <Row className='Titulo-Row'>
          <span>TU PELUQUERIA DE CONFIANZA</span>
          <h2>CONTACTO</h2>
          </Row>
          </Col>
          </Row>
          <Row className='contacto-row'>
            <Col className='contacto-col'>
          <h4>SACA TU TURNO</h4>
          
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
            </Col>
            <Col className='contacto-col'>
              <ul>
                <li>
                  <a href="https://www.instagram.com/barberia3.16/" Target="_blank"><i class="fa-brands fa-instagram"></i>@BARBERIA3.16</a>
                  <a href='tel:3415968696'><i class="fa-solid fa-phone"></i>+54 9 3415 96-8696</a>
                  <a href='https://api.whatsapp.com/send?phone=5493415968696&text=Hola,%20vengo%20de%20tu%20pagina%20web%20y%20me%20gustaria%20sacar%20un%20turno!'><i class="fa-brands fa-whatsapp"></i>+54 9 3415 96-8696</a>
                  <a href='https://goo.gl/maps/4QZUE2mWysfFUWJG9'><i class="fa-solid fa-location-dot"></i>Av. San Martin 1847, Villa gobernador Galvez</a>
                  <a href=''><img src={logo}></img></a>
                </li>
              </ul>
            </Col>
            <Col className='contacto-col'>
              <img className='fotoperfilcontacto' src={perfil}></img>
            </Col>
          </Row>
          </Col>
  </Container>
    )
}

export default Contacto;