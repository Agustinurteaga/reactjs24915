import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function Cards({ data }) {

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component='img'
				height='320'
				image={data.imagen}
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					Nombre: {data.personaje}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					Casa: {data.casaDeHogwarts}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					Actor: {data.interpretado_por}
				</Typography>
			</CardContent>
		</Card>
	);
}
