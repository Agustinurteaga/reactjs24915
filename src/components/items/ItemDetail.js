import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import '../items/ItemDetail.css';
import Cards from '../cards/Cards';
import Spinner from '../spinner/Spinner';
import ItemCount from '../old/ItemCount';


const ItemDetail = () => {
	const [character, setCharacter] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [itemQuantity, setitemQuantity] = useState(null);

	let id = useParams();
	let userID = id.id;
//https://fedeperin-harry-potter-api.herokuapp.com/personajes
	useEffect(() => {
		axios(`https://fedeperin-harry-potter-api.herokuapp.com/personajes/${userID}`).then((res) =>
			setCharacter(res.data)
		);
		setTimeout(() => {
			setIsLoading(false);
		}, 500);
	}, [userID]);
	//console.log (character)

	var handleCallback = (counterData) => {
		setitemQuantity (counterData)
	}

	return (
		<div className='ItemFix-Container'>
			{isLoading ? (
				<Spinner />
			) : (
				<div className='ItemDetail-detail'>
							<div key={id.id}>
								<Cards data={character} />
								<div>
								<ItemCount parentCallback = {handleCallback} />
								</div>
							</div>
				</div>
			)}
		</div>
	);
};
export default ItemDetail;
