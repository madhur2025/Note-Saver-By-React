import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import './Home.css'
import './Pastes.css'
import { removeFromPastes } from '../redux/pasteSlice';
import copy from '../assests/icons8-copy-32.png';
import edit from '../assests/icons8-edit-32.png';
import view from '../assests/icons8-view-32.png';
import deleteicon from '../assests/icons8-delete-32.png'
function Pastes (){
    
    // slice name is paste and value name is pastes and now we're getting pastes(data) from paste(slice)
    const pastes = useSelector((state)=>state.paste.pastes);
    // console.log(pastes)

    // what we're seraching in search paste bar is coming into searchTerm
    const [searchTerm,setSearchTerm] = useState('');
    const dispatch = useDispatch();
    // now we're filtering the data what comes in search term is available in paste 
    // converting the title into lowercase and checking which data comes is it available already in paste
    const filterData = pastes.filter((paste)=>paste.title.toLowerCase().includes(searchTerm.toLowerCase()))
    // console.log(filterData)

    function handleDelete(pasteId){
        dispatch(removeFromPastes(pasteId))
    }
    return(
        <div className='pastes'>
        <div className='pastes-title-copy'>
            <input className='pastes-title'type='text'placeholder='Search title'
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}/>
            <button id='pastes-btn'>Search Note</button>
        </div>

        <div className='pastes-content'>
            {filterData.length > 0 && filterData.map(
                (paste)=>{
                    return (
                        <div id="card" key={paste?._id}>
                            <div className='card-top'>
                            <h2 id='card-title'>{paste.title}</h2>
                            <div className='edit-btns'>
                                <button className='fun-btn'><Link to={`/pastes/${paste?._id}`}><img alt="view" src={view} id="view-icon"/></Link></button>    
                                <button className='fun-btn'><Link to={`/?pasteId=${paste?._id}`}><img alt="edit" src={edit} id="update-icon"/></Link></button>
                                <button className='fun-btn' onClick={() =>{navigator.clipboard.writeText(paste?.content)}}><img alt="copy" id="copy-icon"src={copy} /></button>
                                <button className='fun-btn' onClick={()=>handleDelete(paste?._id)}><img alt ="delete" src={deleteicon} id="dele-icon"/></button>
                            </div>
                            </div>
                            <div className='card-bottom'>
                            <div id='card-cont'>{paste.content}</div>
                            <span style={{fontSize:'12px',color:'grey'}}>{new Date(paste.createdAt).toLocaleDateString('en-GB', {day: '2-digit',month: 'long',year: 'numeric'})}</span>
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
    </div>
    )
}
export default Pastes;