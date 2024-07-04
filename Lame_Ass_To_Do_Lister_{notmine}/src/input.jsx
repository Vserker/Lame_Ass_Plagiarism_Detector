import { useState } from 'react'

export function Input({add}) {
     
    const [current_text, new_text]=useState("");

    function submit_item(event){
        event.preventDefault()
        if (current_text!==''){add(current_text)}
        new_text('')
        

    }

    return(
    <form onSubmit={submit_item} className='search_bar'>
            <label className='new_item' htmlFor='note_bar'>New Item</label><br/>
            <input type='text' 
            value={current_text}
            onChange={e => new_text(e.target.value) } //event.target means the event happening right now(current event) while event means the new that happened. The diff is that, event does not include the events that were triggred by the change in any field's value whereas event.trigger does. The internet says so but I found event only to work the same...  https://community.adobe.com/t5/acrobat-discussions/difference-between-event-target-value-vs-event-value/m-p/9035687
            id='note_bar' name='note'/><br/>
            <input type='submit' value="Add"/>
        </form>
        )
}
