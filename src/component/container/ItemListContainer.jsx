import {Alert, Button, } from "react-bootstrap"
import { useState } from "react";
       export const AlertDismissible =(props)=> {
            const [show, setShow] = useState(true);
          
            return (
              <>
                <Alert show={show} variant="success">
                  <Alert.Heading>{props.title}</Alert.Heading>
                  <p>
                    
                  </p>
                  <hr />
                  <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                      Comprar
                    </Button>
                  </div>
                </Alert>
          
                {!show && <Button onClick={() => setShow(true)}>Tu carrito</Button>}
              </>
            );
          }
          
          
