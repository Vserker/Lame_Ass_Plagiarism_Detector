export function Items({list, delete_todo, check}){

   return(<>
    <li className='lis'key={list.unique_id}>
                
                <label className="tasks_name" htmlFor='checkbox'>
                    <input type='checkbox' className='checkboxes' name='checkboxes'checked={list.state} onChange={e=>check(list.unique_id, e.target.checked)}/>&ensp;&nbsp;
                    {list.title}
                </label>  &ensp;&ensp;
                <button onClick={()=>delete_todo(list.unique_id)}className="delete_item">Delete</button>
                </li><br/>
    </>)
}