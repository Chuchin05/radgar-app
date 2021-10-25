
import { Container,Row,Col,Image } from "react-bootstrap"


// import { Row,Col,Image } from "react-dom"
export const Imagen = () =>{
  return(

    <Container>
      <Row>
 
        <Col xs={3}   md={2}>
            <Image className="imagenCarro" src="./assets/imagenes/photoroom.png" alt="carrito" border="0"/>
        </Col>

      </Row>
    </Container>
    
    )
}
