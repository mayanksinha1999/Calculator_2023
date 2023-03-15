import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Buttons from './Buttons';


export default function Demo() {
  return (
    <div>
        <h1 style={{display:"flex", alignItems:"center", justifyContent:"center"}}>Calculator</h1>
        
    <Container maxWidth="sm">
        <Grid container spacing={1}>
            
            <Grid item xs={6} md={6} style={{background:'black'}}>
                <Buttons/>
            </Grid>
        </Grid>
    </Container>
    </div>
  )
}
