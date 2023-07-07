import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Facet_value from './Facet_value';
import Col from 'react-bootstrap/esm/Col';

function Facet({ name, values, updateCategory }) {
    // Print the name of the facet and loop through all of its values to create Facet_value components
    return (<>
        <Row >
            <Col>
                {name}
            </Col>
            
        </Row>
        {values.map(value => (<Row>
            <Facet_value name={value.name} updateCategory={updateCategory} facet={name}/>
        </Row>
        ))}
    </>
    );
}

export default Facet;