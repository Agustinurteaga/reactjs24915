// import React, { useState } from 'react';
// import './App.css';



// // COMPONENTS
// import Header from './components/Header/Header';
// import CardComponent from './components/CardComponent/CardComponent';

// const App = () => {
// 	const [counter, setCounter] = useState(1);
// 	const [name, setName] = useState('Lucia');

// 	const handlerCounterUp = () => {
// 		setCounter(counter + 1);
// 	};

// 	const handlerCounterDown = () => {
// 		setCounter(counter - 1);
// 	};

// 	const handlerUpdateName = () => {
// 		setName('Verónica');
// 	};

// 	const handlerUpdateNameTwo = () => {
// 		setName('Lucia');
// 	};

// 	const onClick = () => {
// 		alert('Hello World!');
// 	};

// 	const myNumber = 58;

// 	return (
// 		<div className='App'>
// 			<Header
// 				title='Soy el titulo a partir de una prop'
// 				subtitle='Soy un subtitulo a partir de una prop'
// 				onClick={onClick}
// 				myNumber={myNumber}
// 			/>
// 			<div className='UserSection'>
// 				<CardComponent
// 					name='Daniel Di Salvo'
// 					date='Se unio en Enero 2021'
// 					description='Front-end Developer y profesor del Curso de React.js en CoderHouse'
// 					img='https://react.semantic-ui.com/images/avatar/large/matthew.png'
// 				/>
// 				<CardComponent
// 					name='Raul Gutierrez'
// 					date='Se unió en Abril 2021'
// 					description='Scrum Master y UX Designer en Mercado Libre'
// 					img='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
// 				/>
// 				<CardComponent
// 					name='Francesca Bertotti'
// 					date='Se unió en Julio 2021'
// 					description='DevOps y profesora del curso de React.js en CoderHouse'
// 					img='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
// 				/>
// 			</div>
// 			<div className='CounterSection'>
// 				<p>Counter: {counter}</p>
// 				<div className='btn-section'>
// 					<button onClick={handlerCounterUp}>Incrementar</button>
// 					<button onClick={handlerCounterDown}>Decrementar</button>
// 				</div>
// 				<h3>{name}</h3>
// 				<div className='btn-section'>
// 					<button onClick={handlerUpdateName}>Actualizar Nombre</button>
// 					<button onClick={handlerUpdateNameTwo}>Volver Nombre Atras</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };



import React from "react";
// import reactDom from "react-dom";

//  const {useState} = React;

// function ItemCount() {
// const[count,setCount] = useState(0);

// return(
//     <div className= "ItemCount">
// <h1>{count}</h1>
// <div className="button-wraper">
//     <button onCLick={()=>setCount(count-1)}> - </button>
//     <button onCLick={()=>setCount(count +1)}> + </button>
// </div>
// </div>
// )
// }

class ItemCount extends React.Component {
    constructor () {
        super();

     this.state = { 
        counter: 0
     }

     this.lowerLimit = 0;
     this.maxLimit = 5;


     this.counterPlus = this.counterPlus.bind(this)
     this.counterMinus = this.counterMinus.bind(this)

    }
    counterPlus(){
        if(this.state.counter > this.maxLimit){
        this.setState({counter: this.state.counter + 1 })
    }
    }
    counterMinus(){
        if (this.state.counter > this.lowerLimit){
        this.setState({counter: this.state.counter - 1 })
    }
    }
    // const[count,setCount] = useState(0);
    render(){ 
        return(
            <div className= "ItemCount">
        <h1>{this.state.counter}</h1>
        <div className="button-wraper">
            <button onClick={this.counterPlus}> + </button>
            <button onClick={this.counterMinus}> - </button>
        </div>
        </div>
        )
    }
    }

export default ItemCount;

