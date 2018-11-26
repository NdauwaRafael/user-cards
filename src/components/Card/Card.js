/**
 * Created by Raphael Karanja on 26/11/2018.
 */
import React from 'react';
import './card.css';
const Card = (props)=>{
    return (
        <div className="card">
            <img src="http://placehold.it/75" alt=""/>
            <div className="info">
                <div className="info__title">Name Here...</div>
                <div>Company Name here...</div>
            </div>
        </div>
    )
};
export default Card;