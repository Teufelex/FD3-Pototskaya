import React from 'react';
import PropTypes from 'prop-types';
import { PrefetchPlugin } from 'webpack';

import './shop.css';

import IsShopItem from './shopList';

class ISShop extends React.Component {

    static propTypes = {
        section: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                url: PropTypes.string.isRequired,
                count: PropTypes.number.isRequired,
                code: PropTypes.number.isRequired
            })
        ),
    };

    state = {
        items: this.props.items,
        activeElement: null,
    }

    deleteElement = (code) => {
        this.setState({items: this.state.items.filter(b => (b.code !== code))});
    }

    elementClicked = (code) => {
        this.setState({activeElement: (this.state.activeElement === code) ? null : code});
    }

    render() {
        const ITEMS = [];
        this.state.items.forEach(b => {
            let shopElement = <IsShopItem 
                key = {b.code}
                name = {b.name}
                code = {b.code}
                price = {b.price}
                url = {b.url}
                count = {b.count}
                isActive = {(b.code === this.state.activeElement)}
                cbDeleted = {this.deleteElement}
                cbClicked = {this.elementClicked}
            />;
            ITEMS.push(shopElement);
        });

        return (
            <div className = "section"> 
                <h2 className = "section__name">{this.props.section}</h2>
                <div className = "section__items">{ITEMS}</div>
            </div>
        );
    }
};

export default ISShop;