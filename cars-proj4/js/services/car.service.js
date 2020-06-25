'use strict';

import {Utils} from './utils.service.js';

var gCars = createCars();



export const carService = {
    getCars,
    getById,
    saveCar,
    getEmptyCar,
    getNextCarId 
}

function getById(carId) {
     const car = gCars.find(car =>car.id === carId)
     return Promise.resolve(car)
}
function getNextCarId(carId) {
     var idx = gCars.findIndex(car =>car.id === carId)
     if (idx === gCars.length-1 ) idx = 0
     else idx = idx + 1;
     return Promise.resolve(gCars[idx].id)
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
        {id: 'c101', vendor: 'suzuki', speed: 20, imgUrl: 'img/cars-imgs/1.png'},
        {id: 'c102', vendor: 'suzumi', speed: 15, imgUrl: 'img/cars-imgs/2.png'},
        {id: 'c103', vendor: 'fiat', speed: 700, imgUrl: 'img/cars-imgs/3.png'},
    ];
}

function getCars() {
    return Promise.resolve(gCars);
    // return axios.get('/api/car').then(res => res.data)
}

function saveCar(car) {
    if (car.id) {
        const idx = gCars.findIndex(currCar => currCar.id === car.id)
        gCars.splice(idx, 1, car)
    } else {
        car.id = Utils.getRandomId();
        car.createdAt = Date.now();
        gCars.unshift(car);
    }
    return Promise.resolve(car);
}