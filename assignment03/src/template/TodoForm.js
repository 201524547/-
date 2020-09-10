import React, { useState, useEffect } from 'react';

function ToDoForm(props){

    const [text, setText] = useState('');

    const onTextChange = (e) =>{
        props.setValue(e.target.value);
        setText(e.target.value);
    }

    return (
        <form onSubmit={props.handleSubmit}>
          <input value={text} name="text" placeholder="..입력" onChange={(e) => {onTextChange(e)}} /> 
          <button onClick={()=>{setText('')}}>추가</button>
        </form>
    );
}

export default ToDoForm;