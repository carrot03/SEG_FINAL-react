import React from 'react';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import {Container, Col, Button, Row} from 'react-bootstrap'; 
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook 
import './MenuItem.css'

function MenuItem({ image, name, price, description, ingredients, updateTable, itemId }) {
  
  return (
      <Card className="m-2" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Container className='img-container'>
            <img className='img' src={image} alt={name}
            ></img>
          </Container>
          <Card.Text>
            <Row>
              <Col className='description'> <p>Description:</p> {description}</Col>
            </Row>
            <Row>
            <Col className='description'> <p>Price:</p> {price}</Col>
            </Row>
            <Row>
            <Col className='description'> <p>Ingredients:</p> {ingredients}</Col>
            </Row>
          </Card.Text>
          
        </Card.Body>
      </Card>
    );
  }
  

export default MenuItem;