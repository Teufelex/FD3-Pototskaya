import React from 'react';
import PropTypes from 'prop-types';

import './itemCard.css';

class ItemCard extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        code: PropTypes.number.isRequired,
    }

    render() {
        return (
            <div onClick = {this.elementClicked} className = "section__card">
                <img className = "item__photo" src = {this.props.url} alt = "parfum"/>
                <span className = "item__name">{this.props.name}</span>
                <span className = "item__count">{"Осталось " + this.props.count + " ед."}</span>
                <span className = "item__price">{this.props.price + "p."}</span>
            </div>
        );
    }
}

export default ItemCard;