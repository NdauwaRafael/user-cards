/**
 * Created by Raphael Karanja on 26/11/2018.
 */
import React from 'react';
import './card.css';
const Card = (props)=>{
    return (
        <div className="card" >
            <img src={props.avatar_url} alt=""/>
            <div className="info">
                <div className="info__title">{props.name}</div>
                <div>{props.company}</div>
            </div>
        </div>
    )
};
export default Card;