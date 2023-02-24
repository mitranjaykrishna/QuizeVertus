import React from 'react';
import Button from '../Button/Button'; 
const Card=(props)=>{

    return <>
        <div>
            <h2>{props.que}</h2>
            <Button id={props.id} que={props.que} op1={props.op1} op2={props.op2}  op3={props.op3} op4={props.op4} doSome={props.doSome}/>
        </div>
    </>
}

export default Card;