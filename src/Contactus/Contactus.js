import React, { useState } from 'react';
import { Col, Row, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contactus.css';

function Contactus() {
  const [selectedOption, setSelectedOption] = useState('please choose a question from the provided list');
  const [showedMessage, setshowedMessage] = useState('');


  const handleDropdownChange = (event) => {
    const selectedValue = event.target.textContent;
    setSelectedOption(selectedValue);

    if (selectedValue === 'Do you have any vegetarian/vegan/gluten-free options?') {
      setshowedMessage('Yes, we offer vegetarian, vegan, and gluten-free options. Our menu has a variety of dishes to cater to different dietary preferences.');
    } else if (selectedValue === 'Are you open today?') {
      setshowedMessage('Yes! we are waiting for you');
    } else if (selectedValue === 'What types of coffee do you offer?') {
      setshowedMessage('We have a variety of coffee options, including classics like cappuccino and latte, as well as specialty brews like pour-over and cold brew.');
    } else if (selectedValue === 'How can I book a table?') {
      setshowedMessage('For booking a table or any specific concerns please give us a call or send an email. We will be happy to respond and have you with us.');
    }else {
      setshowedMessage('Please select an option.');
    }
  };

  return (
    <div className='contactus' id='contactus'>
      <div className='contactus_header'>
        <h1> Contact us </h1>
        <hr />
      </div>
      <Row>
        <Col>
          <div className='contactus-container'>
            <p>Call us on 111-222-444</p>
            <p>Email us at blessroll@blessroll.com</p>
            <p>Or chat with our virtual assistant to help you</p>
            <div className='chatbox-container'>
            <div className='chatbox'>
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  {selectedOption}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item value="Option 1" onClick={handleDropdownChange}>
                  Do you have any vegetarian/vegan/gluten-free options?
                  </Dropdown.Item>
                  <Dropdown.Item value="Option 2" onClick={handleDropdownChange}>
                    Are you open today?
                  </Dropdown.Item>
                  <Dropdown.Item value="Option 3" onClick={handleDropdownChange}>
                  What types of coffee do you offer?
                  </Dropdown.Item>
                  <Dropdown.Item value="Option 4" onClick={handleDropdownChange}>
                  How can I book a table?
                  </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <p>Employee: {showedMessage}</p>
            </div>
          </div>
          </div>
        </Col>
        <Col>
          <img className='image' src='./images/icecream2.jpg' alt='Bless Roll'></img>
        </Col>
      </Row>
    </div>
  );
}

export default Contactus;