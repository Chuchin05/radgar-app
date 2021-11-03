
import React from "react";
import ItemCount from "./ItemCount";
import { Card } from "react-bootstrap";
import {Alert, Button, } from "react-bootstrap"
import { useState } from "react";
import { CardBody, CardText, CardTitle } from "reactstrap";

       export const ItemListContainer =()=> {       
            return (
              <Card style={{width: "22rem"}}>
              <CardBody>
                  <CardTitle> card Title </CardTitle>
                  <CardText> Some sadasdasdasdasdasdas</CardText>
                <ItemCount stock = {8} initial={1}/>
              </CardBody>
              </Card>
              // <>
              //   <Alert show={show} variant="success">
              //     <Alert.Heading>{title}</Alert.Heading>
              //     <p>
                    
              //     </p>
              //     <hr />
              //     <div className="d-flex justify-content-end">
              //       <Button onClick={() => setShow(false)} variant="outline-success">
              //         Comprar
              //       </Button>
              //     </div>
              //   </Alert>
          
              //   {!show && 
              //   <Button onClick={() => setShow(true)}>carrito</Button>}
              // </>
            );
          }
          
          
