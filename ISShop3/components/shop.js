import React from 'react';
import PropTypes from 'prop-types';

import './shop.css';

import IsShopItem from './shopList';
import ItemCard from './shopCard';
import ChangeList from './changeItem';

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
        activeElementProps: {},
        workMode: null, // 2 - edit, 3 - add
        editedElement: null,
        hasChanges: false,
    }

    deleteElement = (code) => {
        this.setState({
            items: this.state.items.filter(b => (b.code !== code))
        });
    }

    elementClicked = (code) => {
        this.setState({
            activeElement: code,
            activeElementProps: this.state.items.slice().filter(b => (b.code === code))[0],
            editedElement: (this.state.editedElement === code) ? code : null,
            workMode: null,
            hasChanges: false,
        });
    }

    editElement = (code) => {
        this.setState({
            workMode: 2, 
            editedElement: code,
        });
    }

    addNewItem = () => {
        this.setState({
            workMode: 3,
            activeElement: (this.state.items[this.state.items.length - 1].code + 1),
            activeElementProps: {},
            editedElement: (this.state.items[this.state.items.length - 1].code + 1),
        })
    }

    saveElement = (elem) => {
        let newArr = this.state.items.slice();
        if (elem.code > this.state.items[this.state.items.length - 1].code) {
            newArr.push(elem);
        } else {
            newArr.forEach(b => {
                if (b.code === elem.code) {
                    b.name = elem.name;
                    b.price = elem.price;
                    b.url = elem.url;
                    b.count = elem.count;
                }
            });
        }
        this.setState({
            items: newArr, 
            editedElement: null,
            workMode: null,
            activeElementProps: elem,
            hasChanges: false,
        });
    }

    discardChanges = () => {
        this.setState({
            workMode: null, 
            editedElement: null,
            activeElement: (this.state.workMode === 3) ?
            null : this.state.activeElement,
            activeElementProps: (this.state.workMode === 3) ?
            null : this.state.activeElementProps,
            hasChanges: false,
        })
    }

    getChanges = (isChanged) => {
        this.setState({hasChanges: isChanged});
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
                workMode = {this.state.workMode}
                isChanged = {this.state.hasChanges}
                isActive = {(b.code === this.state.activeElement)}
                cbDeleted = {this.deleteElement}
                cbClicked = {this.elementClicked}
                cbEdited = {this.editElement}
            />;
            ITEMS.push(shopElement);
        });

        return (
            <div>
                <h1>ISShop3</h1>
                <div className = "section"> 
                    <h2 className = "section__name">{this.props.section}</h2>
                    <div className = "section__block">
                        <div className = "section__items">{ITEMS}</div>
                        {
                            this.state.activeElement !== null && 
                            this.state.editedElement !== this.state.activeElement && <ItemCard 
                                name = {this.state.activeElementProps.name}
                                code = {this.state.activeElementProps.code}
                                price = {this.state.activeElementProps.price}
                                url = {this.state.activeElementProps.url}
                                count = {this.state.activeElementProps.count}
                            />
                        }
                        {
                            this.state.editedElement !== null && 
                            this.state.editedElement === this.state.activeElement && <ChangeList 
                                key = {this.state.editedElement + ""}
                                code = {this.state.editedElement}
                                workMode = {this.state.workMode}
                                elemProps = {this.state.activeElementProps}
                                cbSave = {this.saveElement}
                                cbCancel = {this.discardChanges}
                                cbIsChanged = {this.getChanges}
                            />
                        }
                    </div>
                    <button className = "new__btn" onClick = {this.addNewItem} 
                            disabled = {(this.state.workMode !== null) ? true : false}>Add New</button>
                </div>
            </div>
        );
    }
};

export default ISShop;