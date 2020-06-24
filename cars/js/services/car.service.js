'use strict';

import {Utils} from './utils.service.js';

var gCars = createCars();



export const CarService = {
    getCars,
    saveCar
}

function createCars() {
    return  [
        {id: 1, vendor: 'suzuki', speed: 20, imgUrl: 'img/cars-imgs/1.png'},
        {id: 2, vendor: 'suzumi', speed: 15, imgUrl: 'img/cars-imgs/2.png'},
        {id: 3, vendor: 'fiat', speed: 700, imgUrl: 'img/cars-imgs/3.png'},
    ];
}

function getCars() {
    return gCars;
}

function saveCar(car) {
    car.id = Utils.getRandomId();
    gCars.unshift(car);
}