import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Async...
import './ItemFix.css';
import { Link } from 'react-router-dom';
import Cards from '../cards/Cards';
import Spinner from '../spinner/Spinner';

const ItemFix = () => {
	const [characters, setCharacters] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios('https://fedeperin-harry-potter-api.herokuapp.com/db').then((res) =>
			setCharacters(res.data.personajes)
		);
		setTimeout(() => {
			setIsLoading(false);
		}, 500);
	}, []);

	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				<div className='ItemFix-container'>
					{characters.map((personajes) => {
						return (
							<div key={personajes.id}>
								<Link to={`/detail/${personajes.id}`} className='Link'>
									<Cards data={personajes} />
								</Link>
							</div>
						);
					})}
				</div>
			)}
		</>
	);
};

export default ItemFix;
