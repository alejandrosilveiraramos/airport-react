
import React from "react"

import { Box } from "@mui/material"


export const PrincipalContainer =  () => {
    return (
        <React.Fragment>
            
            <Box sx={{display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100vw'}}>
                <h1 style={{margin: '2rem'}}>Airport Home</h1>
                <p>Travel is really good bruh.</p>
            </Box>
            <Box sx={{display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100vw', marginTop: '5rem'}}>
                Coming soon
            </Box>
            
        </React.Fragment>
    )
}