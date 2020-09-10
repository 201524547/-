import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import ToDoInfo from '../component/TodoInfo'

function ToDoList(props) {

    const [update,setUpdate] = useState(-1);
    const [remove,setRemove] = useState(-1);

    useEffect(()=>{
        
    },[props, remove])

    useEffect(()=>{
    },[props, update])

    return(
   
        <div>
            <ul>
                {props.data.map((data1)=>(
                    <li>
                        <ToDoInfo data={data1} setUpdate={setUpdate} setTarget={setRemove}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

ToDoList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string
    }))
  };

export default ToDoList;