import React,{useState} from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { HiOutlineBackspace } from 'react-icons/hi';
import { RxCross1 } from 'react-icons/rx';
import { FaEquals } from 'react-icons/fa';



export default function Buttons() {
    const [currentNumber, setCurrentNumber] = useState(0);


    const handleButtonClick = (value) =>{
        console.log("Clicked!!", value);
        setCurrentNumber(value);
    }
    
  return (
    <div>
        <Grid item xs={!2}>
                <Button style={{color:'white'}}>{currentNumber}</Button>
        </Grid>
        
        <ButtonGroup variant="text" aria-label="text button group" >
        <Grid item xs={4}><Button style={{height:48, color:'#f04a06'}}>AC</Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'#f04a06'}}><HiOutlineBackspace/></Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'#f04a06'}}>%</Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'#f04a06'}}>/</Button></Grid>
        </ButtonGroup>
        <ButtonGroup variant="text" aria-label="text button group">
        <Grid item xs={4}><Button style={{height:48, color:'white'}}>7</Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'white'}}>8</Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'white'}}>9</Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'#f04a06'}}><RxCross1/></Button></Grid>
        </ButtonGroup>
        <ButtonGroup variant="text" aria-label="text button group">
        <Grid item xs={4}><Button style={{height:48, color:'white'}}>4</Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'white'}}>5</Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'white'}}>6</Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'#f04a06'}}>-</Button></Grid>
        </ButtonGroup>
        <ButtonGroup variant="text" aria-label="text button group">
        <Grid item xs={4}><Button style={{height:48, color:'white'}} onClick={()=>handleButtonClick("1")}>1</Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'white'}}>2</Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'white'}}>3</Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'#f04a06'}}>+</Button></Grid>
        </ButtonGroup>
        <ButtonGroup variant="text" aria-label="text button group" >
        <Grid item xs={4}><Button style={{height:48, color:'white'}}></Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'white'}}>0</Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'white'}}>.</Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'#f04a06'}}><FaEquals/></Button></Grid>
        </ButtonGroup>
    </div>
  )
}
