import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import {Button} from 'react-bootstrap'; 
import Facets_container from './Facets_container';
import MenuItem from './MenuItem';
import ShowedMenuItem from './ShowedMenuItem';
import { Parallax } from 'react-parallax';
import backgroundimg from '../images/break3.jpg';
import { RiInbox2Fill } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import './Menu.css';


function Menu() {

  const { t } = useTranslation();

  const data = [
    {
      "id":1,
      "name": t('menu-name-1'),
      "image": "https://i.ibb.co/frMyJ4p/pink-cake.jpg",
      "description": t('menu-description-1'),
      "price": "10,000 KRW",
      "category": t('menu-category-cake'),
      "contains": t('menu-contains-strawberries'),
      "ingredients": [t('Flour'), t('Sugar'), t('Eggs'), t('Strawberries')]
    },
    {  "id":2,
      "name": t('menu-name-2'),
      "image": "https://i.ibb.co/cy52zyb/oreo-cake.jpg",
      "description": t('menu-description-2'),
      "price": "12,000 KRW",
      "category": t('menu-category-cake'),
      "contains": t('menu-contains-orio'),
      "ingredients": [t('Flour'), t('Sugar'), t('Eggs'), t('Orio'), t('Cream')]
    },
    {
      "id":3,
      "name": t('menu-name-3'),
      "image": "https://i.ibb.co/BzWcmjj/white-cake.jpg",
      "description": t('menu-description-3'),
      "price": "11,000 KRW",
      "category": t('menu-category-cake'),
      "contains": t('menu-contains-Vanilla'),
      "ingredients": [t('Flour'), t('Sugar'), t('Eggs'), t('Vanilla'), t('Cream')]
    },
  
    {
      "id":4,
      "name": t('menu-name-4'),
      "image": "https://i.ibb.co/k9D1MpL/cherry-roll.jpg",
      "description": t('menu-description-4'),
      "price": "4,500 KRW",
      "category": t('menu-category-roll'),
      "contains": t('menu-contains-Cherry'),
      "ingredients":  [t('Flour'), t('Sugar'), t('Eggs'), t('Cherry'), t('Cream')]
    },
    {
      "id":5,
      "name": t('menu-name-5'),
      "image": "https://i.ibb.co/D7z5JYP/cow-roll.jpg",
      "description": t('menu-description-5'),
      "price": "6,000 KRW",
      "category": t('menu-category-roll'),
      "contains": t('menu-contains-Chocolate'),
      "ingredients": [t('Flour'), t('Sugar'), t('Eggs'), t('Chocolate'), t('Cream')]
    },
    {
      "id":6,
      "name": t('menu-name-6'),
      "image": "https://i.ibb.co/DgR2P8Q/heart-roll.jpg",
      "description": t('menu-description-6'),
      "price": "7,000 KRW",
      "category": t('menu-category-roll'),
      "contains": t('menu-contains-Food-coloring'),
      "ingredients": [t('Flour'), t('Sugar'), t('Eggs'), t('Food coloring'), t('Cream')]
    },
    {
      "id":7,
      "name": t("menu-name-7"),
      "image": "https://i.ibb.co/h9pLYrw/peanut-icecream.jpg",
      "description": t('menu-description-7'),
      "price": "7,000 KRW",
      "category": t('menu-category-icecream'),
      "contains": t('menu-contains-Peanuts'),
      "ingredients": [t('Sugar'), t('Peanuts'), t('Cream')]
    },
    {
      "id":8,
      "name": t('menu-name-8'),
      "image": "https://i.ibb.co/n7nwWK9/mango-icecream.jpg",
      "description": t('menu-description-8'),
      "price": "7,000 KRW",
      "category": t('menu-category-icecream'),
      "contains": t('menu-contains-Mango'),
      "ingredients": [t('Sugar'), t('Mango'), t('Cream')]
    },
    {
      "id":9,
      "name": t('menu-name-9'),
      "image": "https://i.ibb.co/cN2qdkx/oreo-icecream.jpg",
      "description": t('menu-description-9'),
      "price": "7,000 KRW",
      "category": t('menu-category-icecream'),
      "contains": t('menu-contains-orio'),
      "ingredients": [t('Sugar'), t('orio'), t('Cream')]
    },
    {
      "id":10,
      "name": t('menu-name-10'),
      "image": "https://i.ibb.co/pf9WFJj/vanilla-icecream.jpg",
      "description": t('menu-description-10'),
      "price": "7,000 KRW",
      "category": t('menu-category-icecream'),
      "contains": t('menu-contains-Vanilla'),
      "ingredients": [t('Sugar'), t('Vanilla'), t('Cream')]
    }
  ]

  const [item, setItem] = useState('');
 

  const build_categorical_facet_values = (name) => {
    const values = [...new Set(data.map(item => item[name]))]
    return values.map(value => ({ 'name': value, 'checked': false }));
  }  


  // m Initial state
  const [state, setState] = useState({
    all_menu: data,
    shown_menu: data,
    shown_table_menu: [],
    facets: {
      category: build_categorical_facet_values('category'),
      contains: build_categorical_facet_values('contains'),
    }
  })

  //Updates state.shown_menu whenever state.facets changes
  useEffect(() => {

    console.log("menu-name-1:", t('menu-name-1'));
    console.log(data);
    const facets = {}
    // Get all the facet values that are true/active/selected.
    Object.entries(state.facets).forEach(([name, values]) => {
      facets[name] = []
      values.forEach(value => {
        if (value.checked) {
          facets[name].push(value.name)
        }
      })
    })

    // If there are no facets selected, show all menu
    if (Object.values(facets).every(arr => arr.length === 0)) {
      setState({ ...state, shown_menu: state.all_menu })
      return
    }

    // Getting the number of active facet (Not facet_values)
    const number_of_active_facets = Object.values(facets).filter(x => x.length).length

    // Double loop through all menu and all active facets
    // Keep only the items that match the active facets
     const to_show = state.all_menu.map(menuItem =>
      Object.entries(facets).map(([name, values]) =>
        values.includes(menuItem[name])).filter(Boolean).length === number_of_active_facets ? menuItem : undefined
    ).filter(Boolean); 
    
    
     //saving the to_show in shown_menu
     setState({ ...state, shown_menu: to_show })
     console.log("everything:"+state.shown_menu);
      
     if(state.shown_menu.length === 0){
      
      <p>{RiInbox2Fill}gfvvvvvvvvvvvvvvvvvvvv</p>
      
     }

    }, [state.facets, t])//end of use effect

  function clearAllFacetValues(facet) {
    const new_facet = state.facets[facet].map(facet_value => ({
      ...facet_value, checked: false
    }))
    setState({ ...state, facets: { ...state.facets, [facet]: new_facet } })
  }

  // Function to pass down to the Facet_value component to modify the state in this component.
  function updateCategory(facet, value, newChecked) {
    
    const new_facet = state.facets[facet].map(({ name, checked }) => ({ name: name, checked: name === value ? newChecked : checked }))
    setState({ ...state, facets: { ...state.facets, [facet]: new_facet } })

  }


  // table component
  const [isTableEmpty, setIsTableEmpty] = useState(true);

  // function to pass down to the MenuItem component and add the items to the table
  function updateTable(itemId){
    console.log(itemId);
    setItem(itemId); // Update the item state with the clicked item ID
    setState()
    const specificMenuItem = state.shown_menu.find(menuItem => menuItem.id === item);
  
    setState([ ...state.shown_table_menu, specificMenuItem]);
    setIsTableEmpty(false);
    //setState({ ...state, shown_table_menu: specificMenuItem ? [...state.shown_table_menu, specificMenuItem] : [] });
    
  }


  return (
    <div id="menu" className='menu'>
      <div className='menu_header'>
      <h1> Menu </h1>
        <hr></hr>
      </div>
      <Row>
        <Col className='border-end' md={3}>
          <Facets_container facets={state.facets} updateCategory={updateCategory} clearAllFacetValues={clearAllFacetValues} />
        </Col>
        <Col>
        <Container className='d-flex flex-wrap'>

            {state.shown_menu.map((item) => (
              <MenuItem
                key={item.id} 
                name={item.name}
                image={item.image}
                price={item.price}
                description={item.description}
                ingredients={item.ingredients}
                category={item.category}
                updateTable={updateTable} // Pass the function
                itemId={item.id} // Pass the item ID
              />
            ))}
          </Container>
        </Col>
      </Row>

      

      <Parallax className="Menu-parallax" bgImage={backgroundimg} bgImageAlt="oops! I guess we missed an image here..." strength={100} height='10rem'>
              <div className='Menu-break-content'>
                <p>We are waiting for you!</p>
              </div>
      </Parallax>
     
      
    </div>
    
  );
}

export default Menu;