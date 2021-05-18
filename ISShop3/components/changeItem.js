import React from 'react';
import PropTypes from 'prop-types';

import './changeList.css';

class ChangeList extends React.Component {
    static propTypes = {
        code: PropTypes.number.isRequired,
        workMode: PropTypes.number.isRequired,
        cbSave: PropTypes.func.isRequired,
        cbCancel: PropTypes.func.isRequired,
        cbIsChanged: PropTypes.func.isRequired,
    }

    state = {
        name: (this.props.workMode === 2) ? true : false,
        nameValue: this.props.elemProps.name || "",
        defaultName: this.props.elemProps.name || null,
        price: (this.props.workMode === 2) ? true : false,
        priceValue: this.props.elemProps.price || "",
        defaultPrice: this.props.elemProps.name || null,
        count: (this.props.workMode === 2) ? true : false,
        countValue: this.props.elemProps.count || "",
        defaultCount: this.props.elemProps.name || null,
        url: (this.props.workMode === 2) ? true : false,
        urlValue:this.props.elemProps.url || "",
        defaultUrl: this.props.elemProps.name || null,
        disabled: (this.props.workMode === 3) ? true : false,
        isChanged: false,
    }

    nameChanged = (e) => {
        let valid = this.checkStr(e.target.value);
        this.setState({nameValue: e.target.value, name: valid}, this.checkAllField);
    }

    priceChanged = (e) => {
        let valid = this.checkNum(e.target.value);
        this.setState({priceValue: +e.target.value, price: valid}, this.checkAllField);
    }

    urlChanged = (e) => {
        let valid = this.checkStr(e.target.value);
        this.setState({urlValue: e.target.value, url: valid}, this.checkAllField);
    }

    countChanged = (e) => {
        let valid = this.checkNum(e.target.value);
        this.setState({countValue: +e.target.value, count: valid}, this.checkAllField);
    }

    checkStr = (str) => str !== ""

    checkNum = (num) => num >= 0 

    checkAllField = () => {
        let name = this.state.name;
        let price = this.state.price;
        let url = this.state.url;
        let count = this.state.count;
        this.setState({disabled: (name && price && url && count) ? false : true}, this.didSomethingChanged);
    }

    didSomethingChanged = () => {
        let changes = (
            this.state.nameValue === this.state.defaultName &&
            this.state.priceValue === this.state.defaultPrice &&
            this.state.countValue === this.state.defaultCount &&
            this.state.urlValue === this.state.defaultUrl 
        ) ? false : true;
        this.setState({isChanged: changes}, this.sendChanges);
    } 

    sendChanges = () => {
        this.props.cbIsChanged(this.state.isChanged);
    } 

    saveChanges = () => {
        this.props.cbSave({
            code: this.props.code,
            name: this.state.nameValue,
            price: this.state.priceValue,
            url: this.state.urlValue,
            count: this.state.countValue,
        })
    }

    cancel = () => {
        this.props.cbCancel();
    }

    render() {
        return (
            <div className = "section__change">
                <span className = "change__id">{((this.props.workMode === 2) ? 
                "ID:" : "New ID:") + this.props.code}</span>
                <label>
                    Name: 
                    <div className = "input__wrapper">
                        <input type = "text" name = "name" 
                                    onChange = {this.nameChanged} 
                                    value = {this.state.nameValue}
                        />
                        {
                            this.state.name === false && 
                            <span className = "input__err">*Value musn't be an empty string</span>
                        }
                    </div>
                </label>
                <label>
                    Price: 
                    <div className = "input__wrapper">
                        <input type = "number" name = "price" 
                                        onChange = {this.priceChanged} 
                                        value = {this.state.priceValue}
                        />
                        {
                            this.state.price === false && 
                            <span className = "input__err">*Value must be more than "0"</span>
                        }
                    </div>
                </label>
                <label>
                    URL: 
                    <div className = "input__wrapper">
                        <input type = "url" name = "url" 
                                    onChange = {this.urlChanged} 
                                    value = {this.state.urlValue}
                        />
                        {
                            this.state.url === false && 
                            <span className = "input__err">*Value musn't be an empty string</span>
                        }
                    </div>
                </label>
                <label>
                    Quantity: 
                    <div className = "input__wrapper">
                        <input type = "number" name = "quantity" 
                                            onChange = {this.countChanged} 
                                            value = {this.state.countValue}
                        />
                        {
                            this.state.count === false && 
                            <span className = "input__err">*Value must be more than "0"</span>
                        }
                    </div>
                </label>
                <div className = "change__btn">
                    <button onClick = {this.saveChanges} 
                            disabled = {(!this.state.disabled) ? false : true}>Save</button>
                    <button onClick = {this.cancel}>Cancel</button>
                </div>
            </div>
        );
    }
}

export default ChangeList;