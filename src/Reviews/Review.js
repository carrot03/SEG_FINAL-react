import React, { useState } from 'react';
import {Col, Row} from 'react-bootstrap/esm';
import './Review.css';
import { Container } from 'react-bootstrap';


function Review() {
    const [inputValue, setInputValue] = useState('');
    const [notification, setNotification] = useState('');

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
                <h1> Reviews </h1>
                <hr></hr>
            </div>
          <div>
            
                

                <div className='box'>
                    <h1>Review from Selena</h1>
                    <p>"I absolutely love this cafe! Their drinks are so refreshing, and their cakes are incredibly delicious. The cozy atmosphere and 
                    friendly staff make it a perfect spot to relax and enjoy a sweet treat."</p>
                    <hr></hr>
                    <div>
                        <textarea className='inputReview'
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Enter your review"
                        />
                        <button onClick={handleClearInput}>Submit review</button>
                        {notification && <p className="notification">{notification}</p>}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Review;
