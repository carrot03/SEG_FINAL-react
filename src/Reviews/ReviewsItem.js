import React from 'react';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import {Container, Col, Button, Row} from 'react-bootstrap'; 
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook 
import coffee from '../images/coffeecup.jpg';
import './ReviewItem.css'

function ReviewItem({ title, description }) {
  
  return (
      <Card className="m-2" style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>

          <Card.Text>
            <Row>
              <Col>{description}</Col>
            </Row>
          </Card.Text>
          <img className="coffeeimg" src={coffee} alt='Bless Roll'></img>
        </Card.Body>
      </Card>
    );
  }
  

export default ReviewItem;