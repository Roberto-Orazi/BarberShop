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
            <Col className='col1 contacto-col'>
          <h4>SACA TU TURNO</h4>
          <Row className='form-row'>
            <h5>Nombre</h5>
          <input type="text"></input>
          </Row>
          <Row className='form-row'>
          <h5>Telefono</h5>
          <input type="text"></input>
          </Row>
          <Row className='form-row'>
            
          <h5>Servicio</h5>
          <select name='format'>
            <option selected value="corte clasico">Corte Clasico</option>
            <option value="corte premium">Corte Premium</option>
            <option value="afeitada premium">Afeitada Premium</option>
          </select>
         
          </Row>
          <Row className='form-row'>
          <h5>Dia</h5>
          <input type="date"></input>
          </Row>
          <Row className='form-row'>
          <h5>Hora</h5>
          <select name='format'>
            <option selected value="10">10:00</option>
            <option value="11">11:00</option>
            <option value="12">12:00</option>
            <option value="13">13:00</option>
            <option value="14">14:00</option>
            <option value="15">15:00</option>
            <option value="16">16:00</option>
            <option value="17">17:00</option>
            <option value="18">18:00</option>
            <option value="19">19:00</option>
          </select>
          </Row>
          <Row className='form-row'>
          <button>Enviar</button>
          </Row>
            </Col>
            <Col className='col2 contacto-col'>
              <ul>
                <li>
                  <a href="https://www.instagram.com/barberia3.16/" Target="_blank"><i class="fa-brands fa-instagram"></i>BARBERIA3.16</a>
                  <a href='tel:3415968696'><i class="fa-solid fa-phone"></i>+54 9 3415 96-8696</a>
                  <a href='https://api.whatsapp.com/send?phone=5493415968696&text=Hola,%20vengo%20de%20tu%20pagina%20web%20y%20me%20gustaria%20sacar%20un%20turno!'><i class="fa-brands fa-whatsapp"></i>+54 9 3415 96-8696</a>
                  <a href='https://goo.gl/maps/4QZUE2mWysfFUWJG9'><i class="fa-solid fa-location-dot"></i>Av. San Martin 1847, Villa gobernador Galvez</a>
                  <a href=''><img src={logo}></img></a>
                </li>
              </ul>
            </Col>
            <Col className='col3 contacto-col'>
              <img className='fotoperfilcontacto' src={perfil}></img>
            </Col>
          </Row>
          </Col>
  </Container>
    )
}

export default Contacto;