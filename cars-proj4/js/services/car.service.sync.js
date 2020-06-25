'use strict';

import {Utils} from './utils.service.js';

var gCars = createCars();



export const carService = {
    getCars,
    getById,
    saveCar,
    getEmptyCar 
}

function getById(carId) {
    return gCars.find(car =>car.id === carId)
}

function getEmptyCar() {
    return {
        vendor: '',
        speed: 20,
        isAuto: false,
        features: [],
        model: [2005]
    };
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