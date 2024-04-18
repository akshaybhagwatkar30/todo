import './App.css';
import React, { useState } from "react";

function App() {

  const [inputList, setInputList] = useState('');
    
   const [items, setItem] = useState ([]);

   const item =(event)=>{
      setInputList(event.target.value);
   };

   const addItem = ()=>{
       setItem((oldItems)=>{
           return [...oldItems, inputList];  // ... it is a spread operator
       })                      // allow us to quickly copy all or part of an existing arry or object
       setInputList('');
   };

   const ToDoList =(props)=>{
       return(
        <>
         <div className='todo_style'>
         <i className="fas fa-times" aria-hidden="true" onClick={()=>{
          props.onSelect(props.id)
         }}></i>
          
             <li>{props.text}</li>
         </div>
        </>
       )
   }

   const deletItem =(id)=>{
    
    setItem((oldItems)=>{
      return oldItems.filter((arrElem, index)=>{
            return index !== id;
      }) 
    })
   }

   return <>
    <div className="main">
         <div className="todo_box">
             <br/>
             <h1>TODO LIST APP</h1>

          <div className='input_item'>
            <input type="text" placeholder='Enter your Items' onChange={item} value={inputList}/>
            <button onClick={addItem}> + </button>
          </div>   
          
          <ol>
            {items.map((itemsvalue, index)=>
            {
              return <ToDoList key={index} text={itemsvalue} 
              id={index} 
              onSelect = {deletItem}
               />
            })}

          </ol> 
         </div>
    </div>
   </>
}

export default App;
