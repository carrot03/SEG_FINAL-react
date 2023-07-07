import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Facet from './Facet';
import Row from 'react-bootstrap/esm/Row';

function Facets_container({ facets, updateCategory, clearAllFacetValues}) {
    //Loop through all the facets and create a Facet component
    return (
        <Container className='ms-4'>
            {Object.entries(facets).map(([name, values]) =>
                <Row className='border m-3'>
                    <Facet name={name} values={values} updateCategory={updateCategory} clearAllFacetValues={clearAllFacetValues} />
                </Row>)}
        </Container>
    );
}

export default Facets_container;