import React, { useState } from 'react';
import {Col, Row} from 'react-bootstrap/esm';
import './Review.css';
import {reviews_data} from "./Reviews.js"
import { Container } from 'react-bootstrap';
import ReviewItem from './ReviewsItem';


function Review() {
    const [inputValue, setInputValue] = useState('');
    const [notification, setNotification] = useState('');
    const [reviews, setReviews] = useState(reviews_data);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleClearInput = () => {
        setInputValue('');
        setNotification('Review submitted!');
        // Clear the notification after a certain duration
        setTimeout(() => {
            setNotification('');
        }, 2000); // Set the duration (in milliseconds) for how long the notification should be displayed
    };

    return (
        <div id='reviews' className='reviews'>
            
            <div className='review_header'>
                <h1> What our clients said </h1>
                <hr></hr>
            </div>
          <div>
            {reviews.map((item) => (
               <ReviewItem
                 title={item.title}
                 description={item.description}
               />
             ))}
                

            </div>
        </div>
    );
}

export default Review;
