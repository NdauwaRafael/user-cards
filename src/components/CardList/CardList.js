/**
 * Created by Raphael Karanja on 26/11/2018.
 */
import React from 'react';
import Card from '../Card/Card'

const CardList = (props) => {
    return (
        props.cards.map(card => <Card key={card.id} {...card}/>)
    )
};

export default CardList;