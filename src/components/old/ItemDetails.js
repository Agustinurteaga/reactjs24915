
import { Card, Button} from 'react-bootstrap'


const ItemDetails = ({info}) => {

    return <Card style={{ width: '18rem' }}>
    {/* <Card.Img variant="top" src={info.image} /> */}
    <Card.Body>
    <Card.Title> 
        </Card.Title>
    <Card.Text>
    </Card.Text>
    <Button variant="primary"> Mas informacion </Button>
    </Card.Body>
</Card>
;
};
export default ItemDetails;
