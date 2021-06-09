"use strict";

import add from '../components/addNewClient';
import save from '../components/saveChanges';
import filter from '../components/filterClients';
import deleteClient from '../components/deleteClient';

test('проверка работы функции добавления клиента', () => {

  expect(add([{fam: "Иванов", id: 125}, {fam: "Сидоров", id: 128}]))
  .toEqual([{fam: "Иванов", id: 125}, {fam: "Сидоров", id: 128}, {fam: "", id: 138}]);

});

test('проверка работы функции сохранения изменений', () => {

  expect(save({fam: "Иванов", im: "Иван", id: 107}, {fam: "Сидоров", im: "Сидор", id: 107}))
  .toEqual({fam: "Сидоров", im: "Сидор", id: 107});

  expect(save([{fam: "Иванов", im: "Иван", id: 107}, {fam: "Петров", im: "Петр", id: 115}], 
  {fam: "Сидоров", im: "Сидор", id: 107}))
  .toEqual([{fam: "Сидоров", im: "Сидор", id: 107}, {fam: "Петров", im: "Петр", id: 115}]);
  
});

test('проверка работы функции удаления клиента', () => {
  let a = {fam: "Иванов", im: "Иван", id: 107};

  expect(deleteClient([a, {fam: "Петров", im: "Петр", id: 115}], a))
  .toEqual([{fam: "Петров", im: "Петр", id: 115}]);

});

test('проверка работы функции фильтрации списка', () => {

  expect(filter([{fam: "Иванов", im: "Иван", balance: 300}, {fam: "Петров", im: "Петр", balance: 115}]))
  .toEqual([{fam: "Иванов", im: "Иван", balance: 300}, {fam: "Петров", im: "Петр", balance: 115}]);

});