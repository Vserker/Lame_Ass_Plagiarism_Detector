import {Items} from './items.jsx'

export function Todo({current_todos, delete_todo, check}){
   
    return( 
        <ul className='lists'>
            {current_todos.length===0 && 'No To-DoS'}
            {current_todos.map((list)=>{
                return <>      
                <Items list={list} delete_todo={delete_todo} check={check} />
                </>
            })}    
        </ul>
    )
}