import axios from 'axios'

// Read by Id --Start

export const readByIdAirports = async (id: number) => {
    return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .get(`http://localhost:8000/airport/${id}`);

}
// Read by Id --End

// Read All --Start

export const getAllAirports = async () => {

    const AirportService = await axios
    .create({ headers: { 'Content-Type': 'application/json' }})
    .get('http://localhost:8000/airport');

    return AirportService;

}
// Read All --End