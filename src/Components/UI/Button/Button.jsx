import React, { useState } from 'react'

const Button=(props)=>{
    const [clickedId, setClickedId]=useState(-1);

    const handleClick=(event, id)=>{
        setClickedId(id);
        // console.log(event.target.name);
        props.doSome(event);
    };

    return <>
    <div>
        <button id='11' name={props.op1 +" "+ props.que} onClick={(event)=> handleClick(event,props.id)} className={props.id=== clickedId ? "customButton active" : "customButton"} >{props.op1}</button>
        <button id='12' name={props.op2 +" "+ props.que} onClick={(event)=> handleClick(event,props.id)} className={props.id=== clickedId ? "customButton active" : "customButton"} >{props.op2}</button>
        <button id='13' name={props.op3 +" "+ props.que} onClick={(event)=> handleClick(event,props.id)} className={props.id=== clickedId ? "customButton active" : "customButton"} >{props.op3}</button>
        <button id='14' name={props.op4 +" "+ props.que} onClick={(event)=> handleClick(event,props.id)} className={props.id=== clickedId ? "customButton active" : "customButton"} >{props.op4}</button>
    </div>
    </>
}

export default Button;