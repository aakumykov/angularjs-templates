'use strict';

function ComponentOneController(myFilterFilter){
	this.filteredString = myFilterFilter('строка в компоненте');
}

angular.module('MyApp').
component('componentOne',{
	template: `<p>Компонент 1</p><p>{{ctrlOne.filteredString}}</p>`,
	controller: ComponentOneController,
	controllerAs: 'ctrlOne',
});