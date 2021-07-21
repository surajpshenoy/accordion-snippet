import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const Question = ({title, info}) => {

const [btnInfo, setBtn] = useState(false); 
return (
    <article className='question'>
    <header>
    <h4>{title}</h4>
    <button className=
    "btn">
    {btnInfo ? "more info" : "less info"}
    </button>
    </header>    
        
    </article>
  );
};

export default Question;