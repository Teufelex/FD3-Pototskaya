import React from 'react';
import PropTypes from 'prop-types';

import './shopList.css';

class IsShopItem extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        code: PropTypes.number.isRequired,
        isActive: PropTypes.bool.isRequired,
        cbDeleted: PropTypes.func.isRequired,
        cbClicked: PropTypes.func.isRequired,
    };

    elementClicked = () => {
       this.props.cbClicked(this.props.code);
    }

    elementDelete = () => {
        if (confirm("Вы уверены что хотите удалить этот товар?"))
            this.props.cbDeleted(this.props.code);
    }

    render() {
        return (
            <div onClick = {this.elementClicked}
            className = {(this.props.isActive) ? 
                "section__item section__item--active" : "section__item"}>
                <img className = "item__photo" src = {this.props.url} alt = "parfum"/>
                <span className = "item__name">{this.props.name}</span>
                <span className = "item__count">{"Осталось " + this.props.count + " ед."}</span>
                <span className = "item__price">{this.props.price + "p."}</span>
                <button className = "item__btn" onClick = {this.elementDelete}>Delete</button>
            </div>
        );
    }
};

export default IsShopItem;