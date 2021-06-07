import React from 'react';
import PropTypes from 'prop-types';
import MobileClient from './MobileClient';
import { companyEvents } from './events';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    initialClientsList: this.props.clients,
    workMode: 1, //1-Velcom, 2-MTC
    clients: this.props.clients,
  };

  switchToMTC = () => {
    this.setState({workMode: 2});
  }

  switchToVelcom = () => {
    this.setState({workMode: 1});
  }

  componentDidMount = () => {
    //voteEvents.addListener('EAnswerClicked',this.answerSelected);
    //voteEvents.addListener('EFreeAnswerTextChanged',this.freeAnswerTextChanged);
  };

  componentWillUnmount = () => {
    //voteEvents.removeListener('EAnswerClicked',this.answerSelected);
    //voteEvents.removeListener('EFreeAnswerTextChanged',this.freeAnswerTextChanged);
  };
  
  render() {
    console.log("MobileCompany render");

    let clients = [];
    this.state.clients.forEach(b => clients.push(<MobileClient user = {b} key = {b.id} event = {this.events}/>));

    return (
      <div className= 'MobileCompany'>
        <div className = 'MobileCompany__controlButtonsWrap'>
          <div>
            <input type = "button" value = "МТС" onClick = {this.switchToMTC}/>
            <input type = "button" value = "Velcom" onClick = {this.switchToVelcom}/>
          </div>
          <div>Компания: {(this.state.workMode === 1) ? "Velcom" : "МТС"}</div>
        </div>
        <div className = "MobileCompany__buttonsWrap">
          <input type = "button" value = "Все"/>
          <input type = "button" value = "Активный"/>
          <input type = "button" value = "Заблокированные"/>
        </div>
        <div className = "MobileCompany__clientsWrap">
          <div className = "clientsWrap__header">
            <span className = "header__cell">Фамилия</span>
            <span className = "header__cell">Имя</span>
            <span className = "header__cell">Отчество</span>
            <span className = "header__cell">Баланс</span>
            <span className = "header__cell">Статус</span>
            <span className = "header__cell">Редактировать</span>
            <span className = "header__cell">Удалить</span>
          </div>
          {clients}
        </div>
        <input type = "button" value = "Добавить клиента"/>
      </div>
    );
  }
}

export default MobileCompany;
