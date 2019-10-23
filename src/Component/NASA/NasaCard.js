import React from 'react';



const NasaCard = props => {
    return (
        <div>
            <h2>Phote Title: {props.title}</h2>
            <img src={props.url} alt={props.title} />

            <p>{props.explanation}</p>
            <p>Date: {props.date}</p>
        </div> 
 );

}

export default NasaCard;