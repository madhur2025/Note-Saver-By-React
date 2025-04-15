import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Home.css'
import { addToPastes,updateToPastes } from '../redux/pasteSlice';

function ViewPaste (){
    const [title,setTitle] = useState('') // for title of paste 
    const [value,setValue] = useState('') // for content which we paste
    const {id} = useParams();
    const allPastes = useSelector((state)=>state.paste.pastes);
    const paste = allPastes.filter((p)=>p._id === id)[0];
    console.log("my paste :",paste)
    return(
        <div className='home'>
        <div className='inp-field'>

            <input className='input-title' value={paste.title} disabled onChange={(e)=>setTitle(e.target.value)}/>
            <button id='create-btn' onClick={() =>{navigator.clipboard.writeText(paste?.content)}}>Copy</button>

        </div>
        <div>
            <textarea className='content' value={paste.content} disabled onChange={(e)=>setValue(e.target.value)} rows={20}/>
        </div>
    </div>
    )
}
export default ViewPaste;