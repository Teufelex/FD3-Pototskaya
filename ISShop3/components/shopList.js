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
        workMode: PropTypes.number,
        isChanged: PropTypes.bool.isRequired,
        isActive: PropTypes.bool.isRequired,
        cbDeleted: PropTypes.func.isRequired,
        cbClicked: PropTypes.func.isRequired,
        cbEdited: PropTypes.func.isRequired,
    };

    elementClicked = () => {
        console.log(this.props.isChanged)
       if (
           this.props.workMode !== 3 &&
           !this.props.isChanged
        ) this.props.cbClicked(this.props.code);
    }

    elementDelete = () => {
        if (confirm("Вы уверены что хотите удалить этот товар?"))
            this.props.cbDeleted(this.props.code);
    } 
    
    editElem = () => {
        this.props.cbEdited(this.props.code);
    }

    render() {
        return (
            <div onClickCapture = {this.elementClicked} 
            className = {(this.props.isActive) ? 
                "section__item section__item--active" : "section__item"}>
                <img className = "item__photo" src = {this.props.url} alt = "parfum"/>
                <span className = "item__name">{this.props.name}</span>
                <span className = "item__count">{this.props.count + " ед."}</span>
                <span className = "item__price">{this.props.price + "p."}</span>
                <div className = "btn__wrapper">
                    <button className = "item__btn" onClick = {this.elementDelete}
                        disabled = {((this.props.workMode !== null) ? true : false)}>Delete</button>
                    <button className = "item__btn" onClick = {this.editElem}
                        disabled = {((this.props.workMode === 3) ? true : false)}>Edit</button> 
                </div>
            </div>
        );
    }
};

export default IsShopItem;