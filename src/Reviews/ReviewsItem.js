import { React, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import { BiSolidQuoteAltRight, BiSolidQuoteAltLeft } from 'react-icons/bi';
import './ReviewItem.css';

function ReviewItem({ title, description, rating }) {

  
  const ratingValue = parseInt(rating, 10)

  const stars = Array(5).fill(0);
  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };
  
  return (
    <Card className="m-2" style={{ width: '25rem' }}>
      
      <Card.Body>

        <Card.Title className='title'>
          {title}
          
        </Card.Title>

        <Card.Text>
          <Row>
            <Col> <BiSolidQuoteAltLeft /> {description} <BiSolidQuoteAltRight /> </Col>
          </Row>
        </Card.Text>

      </Card.Body>

      <Col>
      <Row>
        <Container className='d-flex flex-wrap'>
          <p>Rating :</p>
      <div className='rating'>
        {stars.map((_, index) => {
          const starColor = ratingValue > index ? colors.orange : colors.grey;
          return (
            <FaStar
              key={index}
              size={24}
              color={starColor}
              style={{
                marginRight: 10,
              }}
            />
          )
        })}
      </div>
      </Container>
      </Row>
      </Col>
    </Card>
  );
}
export default ReviewItem;