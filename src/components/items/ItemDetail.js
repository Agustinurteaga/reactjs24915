import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import '../items/ItemDetail.css';
import Cards from '../cards/Cards';
import Spinner from '../spinner/Spinner';

const ItemDetail = () => {
	const [character, setCharacter] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	let id = useParams();
	let userID = id.id;

	useEffect(() => {
		axios(`https://fedeperin-harry-potter-api.herokuapp.com/db'${userID}`).then((res) =>
			setCharacter(res.data.personajes)
		);
		setTimeout(() => {
			setIsLoading(false);
		}, 500);
	}, [userID]);
	return (
		<div className='ItemFix-Container'>
			{isLoading ? (
				<Spinner />
			) : (
				<div className='ItemDetail-detail'>
					{character.map((personajes) => {
						return (
							<div key={personajes.id}>
								<Cards data={personajes} />
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};
export default ItemDetail;
