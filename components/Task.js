import React, {useState} from 'react';

const Task = (props) => {

    // const handleDeleteClick = () => {
    //     console.log('dziala delete')
    // }

    return (
        <div>
           <ul className="list" >
               <li className="taskList" > 
               <span>{props.text}</span>  <button className='delete' onClick={() => props.clickDelete()} >delete</button> </li>
           </ul> 
        </div>
    );
};

export default Task;