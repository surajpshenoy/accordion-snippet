import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const Question = ({title, info}) => {

const [showInfo, setInfo] = useState(false); 
return (
    <article className='question'>
    <header>
    <h4>{title}</h4>
    <button className=
    "btn" onClick={() => setInfo(!showInfo)}>
    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus/>}
    </button>
    </header> 
    {showInfo && <p>{info}</p> }  
        
    </article>
  );
};

export default Question;