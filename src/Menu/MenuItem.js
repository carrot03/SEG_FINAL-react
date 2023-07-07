import React from 'react';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import {Container, Col, Button, Row} from 'react-bootstrap'; 
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook 


function MenuItem({ name, price, description, ingredients, updateTable, itemId }) {
    return (
      <Card className="m-2" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <Row>
              <Col>description:</Col>
              <Col>{description}</Col>
            </Row>
            <Row>
              <Col>Price:</Col>
              <Col>{price}</Col>
            </Row>
            <Row>
              <Col>ingredients:</Col>
              <Col>{ingredients}</Col>
            </Row>
          </Card.Text>
          <Container className="text-center">
            <Button onClick={() => updateTable(itemId)}>
              Add
            </Button>
          </Container>
        </Card.Body>
      </Card>
    );
  }
  

export default MenuItem;