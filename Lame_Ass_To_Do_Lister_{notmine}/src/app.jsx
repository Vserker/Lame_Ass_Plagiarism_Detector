import './style.css'
import { useEffect, useState } from 'react'
import {Input} from './input.jsx'
import {Todo} from './todo.jsx'
 


export default function App(){

   
    const [current_todos, new_todos]=useState(()=>{
        var stored_json_items=localStorage.getItem('TODOS')
        if(stored_json_items!==null) return JSON.parse(stored_json_items)
        return []
        }
    );

    useEffect(()=>{
        localStorage.setItem('TODOS', JSON.stringify (current_todos))
    },[current_todos])
    
    function check(id, checked_or_not){
        new_todos(current_todos.map(todo=>{
         if (todo.unique_id===id){
             return{...todo,state:checked_or_not}
         }
         return todo
        }) )   
    }
 
    function delete_todo(id){
         new_todos(current_todos.filter(todo => todo.unique_id!==id ))
     }
 

    function submit(current_text){
            new_todos([...current_todos,                   // check 23:00 for how to add more todos in this fuction itself :  https://www.youtube.com/watch?v=Rh3tobg7hEo
                {title:current_text , unique_id: crypto.randomUUID(), state:false}]) 
    }

  
  

   

    return(
    <>

        <Input add={submit}/>
        
        <h3 className='todo_list'>Todo List</h3>
        
        <Todo current_todos={current_todos} delete_todo={delete_todo} check={check} />

    </>
    )
}

