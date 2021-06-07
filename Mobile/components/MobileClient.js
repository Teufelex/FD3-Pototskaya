import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { companyEvents } from './events';

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

  famValue = React.createRef();

  imValue = React.createRef();

  otchValue = React.createRef();

  balanceValue = React.createRef();

  editPressed = () => {
    this.setState({workMode: 2});
  }

  deletePressed = () => {
    console.log("delete")
  }

  savePressed = (e) => {
    this.setState({workMode: 1});
  }

  cancelPressed = () => {
    this.setState({workMode: 1});
  }

  componentDidMount() {
    console.log(this.famValue)
  }

  componentDidUpdate() {
    console.log(this.famValue)
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
              ref={this.famValue}/>
              <input type = "text" defaultValue = {this.state.user.im} className='clientCell'
              ref={this.imValue}/>
              <input type = "text" defaultValue = {this.state.user.otch} className='clientCell'
              ref={this.otchValue}/>
              <input type = "number" defaultValue = {this.state.user.balance} className='clientCell'
              ref={this.balanceValue}/>
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
