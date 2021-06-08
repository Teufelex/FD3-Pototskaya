import React from 'react';
import PropTypes from 'prop-types';
import MobileClient from './MobileClient';
import { companyEvents } from './events';
import filterClients from './filterClients';
import _addNewClient from './addNewClient';
import saveChanges from './saveChanges';

import './MobileCompany.css';
import deleteElem from './deleteClient';

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

  selectedAll = () => {
    this.setState({clients: this.state.initialClientsList});
  }

  selectedActive = () => {
    this.setState({clients: filterClients(this.state.initialClientsList)});
  }

  selectedBlocked = () => {
    this.setState({clients: filterClients(this.state.initialClientsList, false)});
  }

  addNewClient = () => {
    let newList = _addNewClient(this.state.initialClientsList);
    this.setState({clients: newList, initialClientsList: newList});
  }

  e_deleteClient = (client) => {
    if (confirm("Вы уверены, что хотите удалить этого клиента?")) 
    this.setState({
      clients: deleteElem(this.state.clients, client),
      initialClientsList: deleteElem(this.state.initialClientsList, client),
    });
  }

  e_saveNewInfo = (client) => {
    this.setState({
      clients: saveChanges(this.state.clients, client),
      initialClientsList: saveChanges(this.state.initialClientsList, client),
    });
  }

  componentDidMount = () => {
    companyEvents.addListener('DeleteClient',this.e_deleteClient);
    companyEvents.addListener('SaveNewInfo',this.e_saveNewInfo);
  };

  componentWillUnmount = () => {
    companyEvents.removeListener('DeleteClient',this.e_deleteClient);
    companyEvents.removeListener('SaveNewInfo',this.e_saveNewInfo);
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
          <input type = "button" value = "Все" onClick = {this.selectedAll}/>
          <input type = "button" value = "Активный" onClick = {this.selectedActive}/>
          <input type = "button" value = "Заблокированные" onClick = {this.selectedBlocked}/>
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
        <input type = "button" value = "Добавить клиента" onClick = {this.addNewClient}/>
      </div>
    );
  }
}

export default MobileCompany;
