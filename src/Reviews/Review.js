import React, { useState } from 'react';
import {Col, Row} from 'react-bootstrap/esm';
import './Review.css';
import { Container } from 'react-bootstrap';
import {AiOutlineComment} from 'react-icons/ai';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import "react-notifications/lib/notifications.css";
import { Rating } from 'react-simple-star-rating';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import ReviewItem from './ReviewsItem';




function Review() {
    const [inputValue, setInputValue] = useState('');
    const [rating, setRating] = useState(0);
    const { t } = useTranslation();

    const reviews = [
        {
          "title": t('title1'),
          "description": t('description1'),
          "rating": 5
        },
        {
          "title": t('title2'),
          "description": t('description2'),
          "rating": 4
        },
        {
          "title": t('title3'),
          "description": t('description3'),
          "rating": 4
        }
      ];

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleClearInput = () => {
        setInputValue('');

        if (inputValue.length===0 && rating===0){
            NotificationManager.error(t('review-fail'), "", 4000);

        }
        else {
            NotificationManager.success(t('review-success'), "", 4000);
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
                <h1> {t('review-header')} <AiOutlineComment/></h1>
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
                        placeholder={t('review-placeholder')}
                    />
                </Container>
                <p>{t('add-rating')}</p>
                <div>
                    <Rating
                       onClick={handleRating}
                       onPointerEnter={onPointerEnter}
                       onPointerLeave={onPointerLeave}
                       onPointerMove={onPointerMove}
                        /* Available Props */
                    />
                </div>

                <button className='submitBtn' onClick={handleClearInput}>{t('review-submit-btn')} </button>
                
            </div>
        

        </div>


    );
}

export default Review;