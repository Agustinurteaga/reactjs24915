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
//https://fedeperin-harry-potter-api.herokuapp.com/personajes

	useEffect(() => {
		axios('https://fedeperin-harry-potter-api.herokuapp.com/personajes').then((res) =>
			setCharacters(res.data)
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
					{characters.map((currentcharacter) => {
						return (
							<div key={currentcharacter.id}>
								<Link to={`/detail/${currentcharacter.id}`} className='Link'>
									<Cards data={currentcharacter} />
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
