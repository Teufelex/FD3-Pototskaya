import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { companyEvents } from './events';
import saveChanges from './saveChanges';

import './MobileClient.css';
class MobileClient extends React.PureComponent {

  static propTypes = {
    user: PropTypes.shape({
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

  state = {
    user: this.props.user,
    workMode: 1, // 1 - read, 2 - edit
  };

  famValue = null;

  imValue = null;

  otchValue = null;

  balanceValue = null;

  setNewFamValue = (ref) => {
    this.famValue = ref;
  }

  setNewImValue = (ref) => {
    this.imValue = ref;
  }

  setNewOtchValue = (ref) => {
    this.otchValue = ref;
  }

  setNewBalanceValue = (ref) => {
    this.balanceValue = ref;
  }

  editPressed = () => {
    this.setState({workMode: 2});
  }

  deletePressed = () => {
    companyEvents.emit('DeleteClient', this.props.user);
  }

  savePressed = () => {
    let newInfo = {
      fam: this.famValue.value,
      im: this.imValue.value,
      otch: this.otchValue.value,
      balance: +this.balanceValue.value,
      id: this.props.user.id,
    };
    companyEvents.emit('SaveNewInfo', newInfo);

    this.setState({workMode: 1, user: saveChanges(this.state.user, newInfo)});
  }

  cancelPressed = () => {
    this.setState({workMode: 1});
  }

  render() {
    console.log("MobileClient id="+this.state.user.id+" render");

    return (
      <div className='MobileClient'>
        {
          (this.state.workMode === 1) ? 
          (
            <Fragment>
              <span className='MobileClientFIO clientCell'>{this.state.user.fam + ""}</span>
              <span className='MobileClientFIO clientCell'>{this.state.user.im + ""}</span>
              <span className='MobileClientFIO clientCell'>{this.state.user.otch + ""}</span>
              <span className='MobileClientBalance clientCell'>{this.state.user.balance}</span>
              {
              (this.state.user.balance > 0) ?
              <span className='clientCell MobileClient__activeBalance'>active</span> :
              <span className='clientCell MobileClient__blockedBalance'>blocked</span>
              }
              <div className='clientCell'>
                <input type = "button" value = "Редактировать" onClick = {this.editPressed}/>
              </div>
              <div className='clientCell'> 
                <input type = "button" value = "Удалить" onClick = {this.deletePressed}/>
              </div>
            </Fragment>
          ) : 
          (
            <Fragment>
              <input type = "text" defaultValue = {this.state.user.fam} className='clientCell' 
              ref={this.setNewFamValue}/>
              <input type = "text" defaultValue = {this.state.user.im} className='clientCell'
              ref={this.setNewImValue}/>
              <input type = "text" defaultValue = {this.state.user.otch} className='clientCell'
              ref={this.setNewOtchValue}/>
              <input type = "number" defaultValue = {this.state.user.balance} className='clientCell'
              ref={this.setNewBalanceValue}/>
              {
              (this.state.user.balance > 0) ?
              <span className='clientCell MobileClient__activeBalance'>active</span> :
              <span className='clientCell MobileClient__blockedBalance'>blocked</span>
              }
              <div className='clientCell'>
                <input type = "button" value = "Сохранить" onClick = {this.savePressed}/>
              </div>
              <div className='clientCell'> 
                <input type = "button" value = "Отмена" onClick = {this.cancelPressed}/>
              </div>
            </Fragment>
          )
        }
      </div>
    );
  }
}

export default MobileClient;
