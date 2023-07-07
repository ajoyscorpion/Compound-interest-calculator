import './App.css';
import { TextField,Button, colors } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useState } from 'react';


function App() {
  
  // create state
  const[principle,setPrinciple]=useState(0)
  const[year,setYear]=useState(0)
  const[rate,setRate]=useState(0)
  const[interest,setInterest]=useState(0)

  const handleCalculate = (e) => {
    e.preventDefault()
    if(principle == 0 || rate == 0 || year == 0){
      alert("Please enter valid Input!!!")
    }
    else{
      let output = principle*(Math.pow((1+rate/100),year));
      let result = output-principle
      setInterest(result)
    }
  }

  const handleReset = (e) => {
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
  }
  
  return (
    
    <div className='app'>
      <div className="container">
        
        {/* heading part */}
        <div className="heading_text">
          <h1>Compound Interest Calculator</h1>
        
          <h3>Calculate your Compound interest easily</h3>
        </div>

        {/* amount card */}
        <div className="total-amount-card">
          <div className="card-text">
            <h3>₹ {interest}</h3>
            <p>Total Compound interest</p>
          </div>
        </div>

        {/* interest form */}
        <form onSubmit={handleCalculate} style={{ color: 'red' }}>
         <div className="all-inputs">
            <div className="input-field" >
              <TextField 
              id="outlined-basic" 
              label="₹ Principal Amount" 
              fullWidth variant="outlined" 
              value={principle || ""} 
              onChange={e=>setPrinciple(e.target.value)}/>
            </div>
            
            <div className="input-field">
              <TextField 
              id="outlined-basic" 
              label="Rate of Interest (P.A) % " 
              fullWidth variant="outlined" 
              value={rate || ""} 
              onChange={e=>setRate(e.target.value)} />
            </div>
            <div className="input-field">
              <TextField 
              id="outlined-basic" 
              label="Time Period (Year)" 
              fullWidth variant="outlined" 
              value={year || ""} 
              onChange={e=>setYear(e.target.value)}/>
            </div>
         </div>

         {/* buttons */}
          <Stack spacing={2} sx={{mt: 3}}>
            <Button type='submit' style={{backgroundColor:"black"}} variant="contained">Calculate</Button>
            <Button onClick={handleReset} variant="outlined">Reset</Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default App;
