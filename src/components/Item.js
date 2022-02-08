// Muestra info del producto que el user
// clikea para acceder a los detalles del producto


import React from 'react';
import App from '../App';
import { ItemList } from './ItemList';
import { Card, Button} from 'react-bootstrap'


const Item = ({info}) => {

  return <Card style={{ width: '18rem' }}>
    
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}

  <Card.Body>
    <Card.Title> 
        {info.name} 
        </Card.Title>
    <Card.Text>
      {info.description}
    </Card.Text>
    <Card.Text>
    {info.price}
    </Card.Text>
    <Button variant="primary"> Mas informacion </Button>
  </Card.Body>
</Card>
;
};

export default Item;