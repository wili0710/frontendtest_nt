import logo from './logo.svg';
import './App.css';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'
import { useState } from 'react';
import { Button, Alert } from 'reactstrap';

function App() {

  const [inputOneTrue,setInputOneTrue]=useState(false)
  const [inputTwoTrue,setInputTwoTrue]=useState(false)
  const [inputThreeTrue,setInputThreeTrue]=useState(false)
  const [inputOneValue,setInputOneValue]=useState()
  const [inputTwoValue,setInputTwoValue]=useState()
  const [inputThreeValue,setInputThreeValue]=useState()
  const [outputOperation,setOutputOperation]=useState("-")
  const [alert,setAlert]=useState(false)

  const onClickOperator=(operator)=>{
    setAlert(false)
    if(inputOneValue && inputTwoValue && inputThreeValue){
      if(operator==="+"){
        setOutputOperation((inputOneValue+inputTwoValue+inputThreeValue).toFixed(2))
      }
      if(operator==="-"){
        setOutputOperation((inputOneValue-inputTwoValue-inputThreeValue).toFixed(2))
      }
      if(operator==="*"){
        setOutputOperation((inputOneValue*inputTwoValue*inputThreeValue).toFixed(2))
      }
      if(operator==="/"){
        if(inputOneValue===0 && inputTwoValue===0 && inputThreeValue===0){
          setOutputOperation("Can't divide by zero")
        }else{
          setOutputOperation((inputOneValue/inputTwoValue/inputThreeValue).toFixed(2))
        }
      }
    }else if(inputOneValue && inputTwoValue){
      if(operator==="+"){
        setOutputOperation((inputOneValue+inputTwoValue).toFixed(2))
      }
      if(operator==="-"){
        setOutputOperation((inputOneValue-inputTwoValue).toFixed(2))
      }
      if(operator==="*"){
        setOutputOperation((inputOneValue*inputTwoValue).toFixed(2))
      }
      if(operator==="/"){
        if(inputOneValue===0 && inputTwoValue===0){
          setOutputOperation("Can't divide by zero")
        }else{
          setOutputOperation((inputOneValue/inputTwoValue).toFixed(2))
        }
      }
    }else if(inputOneValue && inputThreeValue){
      if(operator==="+"){
        setOutputOperation((inputOneValue+inputThreeValue).toFixed(2))
      }
      if(operator==="-"){
        setOutputOperation((inputOneValue-inputThreeValue).toFixed(2))
      }
      if(operator==="*"){
        setOutputOperation((inputOneValue*inputThreeValue).toFixed(2))
      }
      if(operator==="/"){
        if(inputOneValue===0 && inputThreeValue===0){
          setOutputOperation("Can't divide by zero")
        }else{
          setOutputOperation((inputOneValue/inputThreeValue).toFixed(2))
        }
      }
    }else if(inputTwoValue && inputThreeValue){
      if(operator==="+"){
        setOutputOperation((inputTwoValue+inputThreeValue).toFixed(2))
      }
      if(operator==="-"){
        setOutputOperation((inputTwoValue-inputThreeValue).toFixed(2))
      }
      if(operator==="*"){
        setOutputOperation((inputTwoValue*inputThreeValue).toFixed(2))
      }
      if(operator==="/"){
        if(inputTwoValue===0 && inputThreeValue===0){
          setOutputOperation("Can't divide by zero")
        }else{
          setOutputOperation((inputTwoValue/inputThreeValue).toFixed(2))
        }
      }
    }else{
      setAlert(true)
    }
  }

  return (
    <div style={{
      backgroundColor:"#30a9e1",
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }}>
      <div className="p-4" style={{
        width:"50%",
        minWidth:"300px",
        maxWidth:"500px",
        backgroundColor:"white",
        borderRadius:10,
        display:"flex",
        flexDirection:"column"
      }}>
        <div style={{
          marginBottom:"5px",
          paddingBottom:"5px",
          borderBottom:"3px solid whitesmoke"
        }}>
          <h4>
            Kalkulator Sederhana
          </h4>
        </div>
        <div className="inputAngkaBox">
          <InputGroup>
            <InputGroupAddon addonType="prepend" >
              <InputGroupText>
                <Input style={{cursor:"pointer"}} addon type="checkbox" aria-label="Checkbox for following text input" onClick={(event)=>{setInputOneTrue(event.target.checked);setInputOneValue("");setOutputOperation("-")}} />
              </InputGroupText>
            </InputGroupAddon>
            <input type="number" step="0.01" className="form-control" placeholder={inputOneTrue?"Masukkan Angka":"Centang dulu kotak disebelah"} disabled={inputOneTrue?false:true} value={inputOneValue} onChange={(event)=>setInputOneValue(parseFloat(event.target.value))} />
          </InputGroup>
        </div>
        <div className="inputAngkaBox">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <Input style={{cursor:"pointer"}} addon type="checkbox" aria-label="Checkbox for following text input" onClick={(event)=>{setInputTwoTrue(event.target.checked);setInputTwoValue("");setOutputOperation("-")}} />
              </InputGroupText>
            </InputGroupAddon>
            <input type="number" step="0.01" className="form-control" placeholder={inputTwoTrue?"Masukkan Angka":"Centang dulu kotak disebelah"} disabled={inputTwoTrue?false:true} value={inputTwoValue} onChange={(event)=>setInputTwoValue(parseFloat(event.target.value))}/>
          </InputGroup>
        </div>
        <div className="inputAngkaBox">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <Input style={{cursor:"pointer"}} addon type="checkbox" aria-label="Checkbox for following text input" onClick={(event)=>{setInputThreeTrue(event.target.checked);setInputThreeValue("");setOutputOperation("-")}} />
              </InputGroupText>
            </InputGroupAddon>
            <input type="number" step="0.01" className="form-control" placeholder={inputThreeTrue?"Masukkan Angka":"Centang dulu kotak disebelah"} disabled={inputThreeTrue?false:true} value={inputThreeValue} onChange={(event)=>setInputThreeValue(parseFloat(event.target.value))} />
          </InputGroup>
        </div>
        <div style={{
          display:"flex",
          justifyContent:"center",
          marginTop:"0px",
          marginBottom:"5px",
          paddingBottom:"5px",
          borderBottom:"1px solid black"
        }}>
          <Button outline color="primary" className="m-2" value="+" onClick={(event)=>onClickOperator(event.target.value)}>+</Button>
          <Button outline color="danger" className="m-2" value="-" onClick={(event)=>onClickOperator(event.target.value)}>-</Button>
          <Button outline color="success" className="m-2" value="*" onClick={(event)=>onClickOperator(event.target.value)}>x</Button>
          <Button outline color="info" className="m-2" value="/" onClick={(event)=>onClickOperator(event.target.value)}>/</Button>
        </div>
        {
          alert?
            <div style={{marginTop:"5px"}}>
              <Alert color="danger">
                Minimal input 2 angka!
              </Alert>
            </div>
            :
            null
        }
        
        <div style={{
          marginTop:"15px",
          display:"flex",
          justifyContent:"space-between"
        }}>
          <h4>
            Hasil :
          </h4>
          <h4>
            {outputOperation}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
