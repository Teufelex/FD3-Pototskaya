import React from 'react';
import renderer from 'react-test-renderer';
import MobileCompany from '../components/MobileCompany';

let clientsArr=[ 
  {id:101, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200}, 
  {id:105, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:250}, 
  {id:110, fam:"Петров", im:"Пётр", otch:"Петрович", balance:180},
  {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:220},
];

test('работа MobileCompany', () => {

  const component = renderer.create(
    <MobileCompany clients = {clientsArr}/>
  );

  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const buttonElem = component.root.find( el => el.type==='input' && el.props.value === "Добавить клиента"); 

  buttonElem.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  buttonElem.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const buttonElemAct = component.root.find( el => el.type==='input' && el.props.value === "Активный"); 

  buttonElemAct.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const buttonElemBlock = component.root.find( el => el.type==='input' && el.props.value === "Заблокированные"); 

  buttonElemBlock.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const buttonElemAll = component.root.find( el => el.type==='input' && el.props.value === "Все"); 

  buttonElemAll.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
});
