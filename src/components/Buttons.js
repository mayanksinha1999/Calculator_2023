import React,{useState} from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { HiOutlineBackspace } from 'react-icons/hi';
import { RxCross1 } from 'react-icons/rx';
import { FaEquals } from 'react-icons/fa';



export default function Buttons() {
    const [currentNumber, setCurrentNumber] = useState("");
    const [currentOperator, setCurrentOperator] = useState("");
    const [previousNumber, setPreviousNumber] = useState("");
    // const [outcome, setOutcome] = useState("");


    const handleNumberClick = (value) =>{
        console.log("Clicked!!", value);
        if(currentOperator === ""){
            setCurrentNumber(currentNumber + value);
        }else{
            setPreviousNumber(currentNumber);
            setCurrentNumber(value);
        }
    }

    const handleOperatorClick =(value)=>{
        console.log("Operator clicked!!", value);
        setCurrentOperator(value);
    }

    const handleEqualClick = (value) =>{
        console.log("Equals clicked");
        if(currentOperator === "+"){
             setCurrentNumber(Number(previousNumber) + Number(currentNumber));
        }else if(currentOperator === "-"){
             setCurrentNumber(Number(previousNumber) - Number(currentNumber));
        }else if(currentOperator === "*"){
             setCurrentNumber(Number(previousNumber) * Number(currentNumber));
        }else if(currentOperator === "/"){
             setCurrentNumber(Number(previousNumber) / Number(currentNumber));
        }
        
       
        setCurrentOperator("");
        setPreviousNumber("");
        
    }

    const handleClearButton = (value)=>{
        console.log("Cleared!!", value);
        setPreviousNumber("");
        setCurrentNumber("");
        setCurrentOperator("");
        
    }
    
  return (
    <div>
        <Grid item xs={2}>
                <Button style={{color:'white'}}>{previousNumber}{currentOperator}{currentNumber}</Button>
        </Grid>
        
    <hr style={{borderWidth: '0.1px'}}/>
       
        
        <ButtonGroup variant="text" aria-label="text button group" style={{display:'flex'}}>
        <Grid item xs={4}><Button style={{height:48, color:'#f04a06'}} onClick={()=>handleClearButton("AC")}>AC</Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'#f04a06'}}><HiOutlineBackspace/></Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'#f04a06'}} onClick={()=>handleOperatorClick("%")}>%</Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'#f04a06'}} onClick={()=>handleOperatorClick("/")}>/</Button></Grid>
        </ButtonGroup>
        <ButtonGroup variant="text" aria-label="text button group" style={{display:'flex'}}>
        <Grid item xs={4}><Button style={{height:48, color:'white'}} onClick={()=>handleNumberClick("7")}>7</Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'white'}} onClick={()=>handleNumberClick("8")}>8</Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'white'}} onClick={()=>handleNumberClick("9")}>9</Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'#f04a06'}} onClick={()=>handleOperatorClick("*")}><RxCross1/></Button></Grid>
        </ButtonGroup>
        <ButtonGroup variant="text" aria-label="text button group" style={{display:'flex'}}>
        <Grid item xs={4}><Button style={{height:48, color:'white'}} onClick={()=>handleNumberClick("4")}>4</Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'white'}} onClick={()=>handleNumberClick("5")}>5</Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'white'}} onClick={()=>handleNumberClick("6")}>6</Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'#f04a06'}} onClick={()=>handleOperatorClick("-")}>-</Button></Grid>
        </ButtonGroup>
        <ButtonGroup variant="text" aria-label="text button group" style={{display:'flex'}}>
        <Grid item xs={4}><Button style={{height:48, color:'white'}} onClick={()=>handleNumberClick("1")}>1</Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'white'}} onClick={()=>handleNumberClick("2")}>2</Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'white'}} onClick={()=>handleNumberClick("3")}>3</Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'#f04a06'}} onClick={()=>handleOperatorClick("+")}>+</Button></Grid>
        </ButtonGroup>
        <ButtonGroup variant="text" aria-label="text button group" style={{display:'flex'}}>
        <Grid item xs={4}><Button style={{height:48, color:'white'}}></Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'white'}} onClick={()=>handleNumberClick("0")}>0</Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'white'}} onClick={()=>handleNumberClick(".")}>.</Button></Grid>
        <Grid item xs={4}><Button style={{height:48, color:'#f04a06'}} onClick={()=>handleEqualClick("=")}><FaEquals/></Button></Grid>
        </ButtonGroup>
    </div>
  )
}
