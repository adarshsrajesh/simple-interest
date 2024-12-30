import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {
  const [principle, setPrinciple] = useState(null)
  const [rate, setRate] = useState(null)
  const [year, setYear] = useState(null)
  const [interest, setInterest] = useState(0)
  const [invalidPrinciple, setInvalidPrinciple] = useState(false)
  const [invalidRate, setInvalidRate] = useState(false)
  const [invalidYear, setInvalidYear] = useState(false)

  const handleCalculate = (e) => {
    e.preventDefault()
    if (principle && rate && year) {

      setInterest(principle * rate * year / 100)
    }
    else {
      alert(`Enter the Required field`)
    }
  }
  const handleReset = ()=>{
    setInterest(0)
    setPrinciple(0)
    setInvalidPrinciple(false)
    setRate(0)
    setYear(0)
    setInvalidYear(false)
    setInvalidRate(false)

   }

  const validateinputs = (tag) => {
    console.log(typeof tag);
    const { name, value } = tag
    console.log(name, value);
    console.log(!!value.match(/^\d+(\.\d+)?$/));
    if (name == 'principle') {
      if (value.match(/^\d+(\.\d+)?$/)) {
        setInvalidPrinciple(false)
        setPrinciple(value)
      }
      else {
        setInvalidPrinciple(true)
      }

    }
    if (name == 'rate') {
      if (value.match(/^\d+(\.\d+)?$/)) {
        setInvalidRate(false)
        setRate(value)
      }
      else {
        setInvalidRate(true)
      }

    }
    if (name == 'year') {
      if (value.match(/^\d+(\.\d+)?$/)) {
        setInvalidYear(false)
        setYear(value)
      }
      else {
        setInvalidYear(true)
      }

    }





  }




  return (
    <>
      <div style={{ width: '100%', minHeight: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>
        <div style={{ width: '600px' }} className='bg-light rounded p-5'>
          <h3 className='text-center'>Simple Interest Calculator</h3>
          <p className='text-center'> Calculate your simple Interest</p>
          <div className='bg-warning p-5 text-light text-center rounded'>
            <p>{interest}</p>
            <p className='fw-bolder'>Total simple interest</p>

          </div>
          <form className='mt-3'>
            {/* Principle Amount */}
            <div>
              {
                invalidPrinciple && <div className=' text-danger fw-bolder mb-3'>
                  Invalid Principle Amount
                </div>
              }
            </div>
            <div className='mb-3'>
              <TextField value={principle||""} name='principle' onChange={e => validateinputs(e.target)} className='w-100' id="outlined-principle" label="Principle Amount" variant="outlined" />

            </div>



            {/* Rate Amount */}
            <div>
              {
                invalidRate && <div className='text-danger fw-bolder mb-3'>
                  Invalid Rate
                </div>
              }
            </div>
            <div className='mb-3'>
              <TextField  value={rate||""} name='rate' onChange={e => validateinputs(e.target)} className='w-100' id="outlined-Rate" label="Rate of interest" variant="outlined" />

            </div>


            {/* Year */}
            <div>
              {
                invalidYear && <div className=' text-danger fw-bolder mb-3'>
                  Invalid  Year
                </div>
              }
            </div>
            <div className='mb-3'>
              <TextField value={year||""} name='year' onChange={e => validateinputs(e.target)} className='w-100' id="outlined-year" label="Year" variant="outlined" />

            </div>
            <Stack direction="row" spacing={2}>
              <Button onClick={(e) => handleCalculate(e)} disabled={invalidPrinciple || invalidRate || invalidYear} style={{ width: '50%', height: '70px' }} className='bg-dark' variant="contained">Calculate</Button>
              <Button onClick={handleReset} style={{ width: '50%', height: '70px' }} className='border border-dark text-dark' variant="outlined">Reset</Button>
            </Stack>

          </form>

        </div>

      </div>

    </>
  )
}

export default App