import React from 'react';
import axios from 'axios'

import { getAllAirports } from '../../services/AirportService';

import { Box } from "@mui/material"
import TableAirport from '../components/table-airport/TableAirport';

export const Airport = () => {

    const [airports, setAirport] = React.useState<any[]>();

    if (!airports || airports.length == 0) {
        const airportsReq: any = getAllAirports();
        airportsReq.then((res: any) => {
          setAirport(res.data);
        });
      }

    return(
        <React.Fragment>
            
            <Box sx={{display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100vw', margin: '3rem 0'}}>
                {/* <h1>Airport Table</h1>
                <p>The Airport</p>
                <div>
                    <table>
                        <thead>
                            <td>Código</td>
                            <td>Nome</td>
                            <td>Sobrenome</td>
                        </thead>
                        <tbody>
                            {
                            airports?.map(airport => {
                            return (
                                <tr>
                                    <td>{airport.codeAirport}</td>
                                    <td>{airport.nameAirport}</td>
                                    <td>{airport.addressAirport}</td>
                                    <a href={`/airport/${airport.codeAirport}`}> See the airport</a>
                                </tr>
                            )
                            })
                            }
                        </tbody>
                    </table>

                </div> */}
                <TableAirport />

            </Box>
        </React.Fragment>
    )
}