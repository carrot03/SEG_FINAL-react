import React, { useState } from 'react';
import { Col, Row, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import break1 from '../images/break1.jpg';
import { useTranslation } from 'react-i18next';
import {AiFillPhone} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';
import {BsFillChatRightTextFill} from 'react-icons/bs';
import './Contactus.css';

function Contactus() {
  const [selectedOption, setSelectedOption] = useState('please choose a question from the provided list');
  const [showedMessage, setshowedMessage] = useState('');
  const { t } = useTranslation();


  const handleDropdownChange = (event) => {
    const selectedValue = event.target.textContent;
    setSelectedOption(selectedValue);

    if (selectedValue === t('q1')) {
      setshowedMessage(t('a1'));
    } else if (selectedValue === t('q2')) {
      setshowedMessage(t('a2'));
    } else if (selectedValue === t('q3')) {
      setshowedMessage(t('a3'));
    } else if (selectedValue === t('q4')) {
      setshowedMessage(t('a4'));
    }else {
      setshowedMessage(t('a-d'));
    }
  };

  return (
    <div className='contactus' id='Contactus'>
      <div className='contactus_header'>
      <div className='contactus-header'>
        <h1> {t('contactus-header')} </h1>
        <hr></hr>
      </div>
      </div>
      <Row>
        <Col>
          <div className='contactus-container'>
           
            <p><AiFillPhone/>Call us on 111-222-444</p>
            <p><MdEmail/>Email us at blessroll@blessroll.com</p>
            <p>Or <BsFillChatRightTextFill/> chat with our virtual assistant to help you in the following chatbox:</p>
            <p>Tip: Choose a question from the dropdown list.</p>
            <div className='chatbox-container'>
           
                
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                      {selectedOption}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item value="Option 1" onClick={handleDropdownChange}>
                      {t('q1')}
                      </Dropdown.Item>
                      <Dropdown.Item value="Option 2" onClick={handleDropdownChange}>
                      {t('q2')}
                      </Dropdown.Item>
                      <Dropdown.Item value="Option 3" onClick={handleDropdownChange}>
                      {t('q3')}
                      </Dropdown.Item>
                      <Dropdown.Item value="Option 4" onClick={handleDropdownChange}>
                      {t('q4')}
                      </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                
                <div className='chatbox'>
                <p>Employee: {showedMessage}</p>
                </div>
          </div>
          </div>
        </Col>
        <Col>
          <img className='image' src={break1} alt='Bless Roll'></img>
        </Col>
      </Row>
    </div>
  );
}

export default Contactus;