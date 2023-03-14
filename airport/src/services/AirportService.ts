import axios from 'axios'

import { AirportData } from '../model/AirportData';

// Read by Id --Start

export const readByIdAirports = async (id: number) => {
    return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .get(`http://localhost:8000/airport/${id}`);

}
// Read by Id --End

// Read All --Start

export const getAllAirports = async () => {

    const { data } = await axios
    .create({ headers: { 'Content-Type': 'application/json' }})
    .get('http://localhost:8000/airport');

    return data;

}
// Read All --End


// Delete --Start

export const deleteAirport = async (id: number) => {

    const AirportService = await axios
   .create({ headers: { 'Content-Type': 'application/json' }})
   .delete(`http://localhost:8000/airport/${id}`);

    return AirportService;

}
// Delete --End

// Create --Start

export const createAirport = async ( data: AirportData) => {

    const AirportService = await axios
  .create({ headers: { 'Content-Type': 'application/json' }})
  .post(`http://localhost:8000/airport`, data);

    return AirportService;

}
// Create --End

// Update --Start

export const updateAirport = async (id: number, data: AirportData) => {

    const AirportService = await axios
 .create({ headers: { 'Content-Type': 'application/json' }})
 .put(`http://localhost:8000/airport/${id}`, data);

    return AirportService;

}
// Update --End