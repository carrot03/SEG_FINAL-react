import React, { useState } from 'react';
import {Col, Row} from 'react-bootstrap/esm';
import './Review.css';
import {reviews_data} from "./Reviews.js"
import { Container } from 'react-bootstrap';
import {AiOutlineComment} from 'react-icons/ai';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import "react-notifications/lib/notifications.css";
import { Rating } from 'react-simple-star-rating';
import Button from 'react-bootstrap/Button';
import ReviewItem from './ReviewsItem';




function Review() {
    const [inputValue, setInputValue] = useState('');
    const [reviews, setReviews] = useState(reviews_data);
    const [rating, setRating] = useState(0)



    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleClearInput = () => {
        setInputValue('');

        if (inputValue.length===0 && rating===0){
            NotificationManager.error("Umm.. We are missing your review. Please write down your review first, Thank you!", "", 4000);

        }
        else {
            NotificationManager.success("Review submitted!", "", 4000);
        }
    };

    // Optional callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => { console.log(value, index); };
    
    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate);
        console.log(rate);
    };
  
    const handleReset = () => {
      // Set the initial value
      setRating(0)
    }    
    
    

    return (
        <div id='reviews' className='reviews'>
            <NotificationContainer/>
            <div className='review_header'>
                <h1> What our clients said <AiOutlineComment/></h1>
                <hr></hr>
            </div>

        
            <Col>
              <Row>
                <Container className='d-flex flex-wrap'>
                {reviews.map((item) => (
                   <ReviewItem
                     title={item.title} 
                     description={item.description}
                     rating={item.rating}
                   />
                 ))}
                 </Container>
                </Row> 
            </Col>
                
            <div className='userReview'>
                <Container className='d-flex flex-wrap' > 
                    <textarea className='inputReview'
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Enter your review"
                    />
                </Container>
                <p>Add Rating?</p>
                <div>
                    <Rating
                       onClick={handleRating}
                       onPointerEnter={onPointerEnter}
                       onPointerLeave={onPointerLeave}
                       onPointerMove={onPointerMove}
                        /* Available Props */
                    />
                </div>

                <Button variant="outline-primary" className='submitBtn' onClick={handleClearInput}>Submit review </Button>
                
            </div>
        

        </div>


    );
}

export default Review;