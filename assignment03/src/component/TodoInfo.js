import React, { Component, useState } from 'react';
import PropTypes from 'prop-types'

function ToDoInfo(props){
 
    const [content, setContent] = useState(props.data.text);
    const [id,setId] = useState(props.data.id)

    return(
        <div>
        <div>{content}</div>
        <button onClick={()=>{props.setUpdate(id)}}>수정</button>
        <button onClick={()=>{props.setRemove(id)}}>삭제</button> 
        </div>
    )
}


export default ToDoInfo;