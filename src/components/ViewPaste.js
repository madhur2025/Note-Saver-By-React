import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Home.css'
import './ViewPaste.css'
function ViewPaste (){
    const [title,setTitle] = useState('') // for title of paste 
    const [value,setValue] = useState('') // for content which we paste
    const {id} = useParams();
    const allPastes = useSelector((state)=>state.paste.pastes);
    const paste = allPastes.filter((p)=>p._id === id)[0];
    console.log("my paste :",paste)
    return(
        <div className='view-paste'>
        <div className='view-paste-input-title'>
            <input className='view-paste-title' value={paste.title} disabled onChange={(e)=>setTitle(e.target.value)}/>
            <button id='view-paste-btn' onClick={() =>{navigator.clipboard.writeText(paste?.content)}}>Copy</button>
        </div>
        <div>
            <textarea className='view-paste-content' value={paste.content} disabled onChange={(e)=>setValue(e.target.value)} rows={20}/>
        </div>
    </div>
    )
}
export default ViewPaste;