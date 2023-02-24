import React, { useState } from 'react';
import './App.css';
import Banner from './Components/UI/Banner/Banner'
import Card from './Components/UI/Card/Card';
// import Button from './Components/UI/Button/Button'; 


function App() {

  var count=0;
  let [check,setCheck]=useState(0);
  const [v1,setv1]=useState(true);
  const [v2,setv2]=useState(false);
  const [hideCart,setCart]=useState(true);
  const [hideCart2,setCart2]=useState(false);
  const [ans,setAns]=useState(0);
  

  
  const fun=(event)=>{
    const name=event.target.name;
    
    if(name===('Mahatma Gandhi Who is the father of our nation?'))
      {
        count++;
        check++;
      }
    else if(name==='Green What color is are the leaves?')
      {
        count++;
        check++;
      }
    else if(name==='Blue What color is the sky?')
    {
      count++;
      check++;
    }
    else if(name==='Yellow What color is the fire?')
      {
        count++;
        check++;
      }
    else{
      check++;
    }
    // console.log(count);
  }
  

  const updateB1=()=>{
    
      setCart(false);//onclic v2
      setv1(false)

  }
  
  const updateB2=()=>{
    
    setv2(false);
    setv1(true);
    showB1();
    setAns(count);//onclick v2
    setCheck(0);
    setCart2(true);
    setCart(true);//onclic v2

  }

  const showB1=()=>{
    
  setv2(false)}

  const showB2=()=>{
    if(check===5){ 
    setv2(true)
    setCheck(0);
    }
  }
  setInterval(showB2,1000);
  

  return (
    <div className="App">
      <Banner />
      <div>
        <div className={hideCart?'hideC' : 'show'}>
          <Card id='1' que='Who is the father of our nation?' op1='Mahatma Gandhi' op2='Jawaharlal Nehru'  op3='Donald Trump' op4='Barrack Obama' doSome={fun} />
          <Card id='2' que='What color is are the leaves?' op1='Blue' op2='Red'  op3='Yellow' op4='Green' doSome={fun}  />
          <Card id='3' que='What color is the sky?' op1='Blue' op2='Red'  op3='Yellow' op4='Green' doSome={fun}/>
          <Card id='4' que= 'What color is the sky?' op1='Blue' op2='Red'  op3='Yellow' op4='Green' doSome={fun} />
          <Card id='5' que='What color is the fire?' op1='Blue' op2='Red'  op3='Yellow' op4='Green' doSome={fun}/>
        </div>
        <div className={!hideCart2?'hideC':'showC'}>
          <h2>You have answered {ans}/5 Correctly</h2>
        </div>
      
        <button onClick={()=>updateB1()} className={v1===true?'showC':'hideC'}  >Start Quiz</button>
        <button onClick={()=> updateB2()} className={!v2?'hideC':'showC'} >Show Results</button>
      </div>
      
    </div>
  );
}

export default App;
