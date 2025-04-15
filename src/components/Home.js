import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import './Home.css'
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

function Home() {

    const [title, setTitle] = useState('') // for title of paste 
    const [value, setValue] = useState('') // for content which we paste
    const [searchParams, setSearchParams] = useSearchParams(); // it allow to read and update query parameters
    const pasteId = searchParams.get('pasteId'); // the value of params is in ('pasteId') :: localhost://:3000/?pasterId=1234
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes); // bring all pastes for edit the current paste

    // creating a use effect for edit the existing paste // place it carefully otherwise it will give an refrrence error  
    useEffect(() => {
        if (pasteId) {
            const paste = allPastes.find((p) => p._id === pasteId);
            setTitle(paste.title);
            setValue(paste.content);
        }
    }, [pasteId])

    // for creating new paste by user
    function createPaste() {
        const paste = {
            title: title,
            content: value,
            _id: pasteId || Date.now().toString(36),
            createdAt: new Date().toISOString(),
        }

        if (pasteId) {
            // update paste
            dispatch(updateToPastes(paste));
        }
        else {
            // create paste
            dispatch(addToPastes(paste));
        }

        // when we create or add paste the input field will be clear again
        setTitle('')
        setValue('')
        setSearchParams('')
    }
    return (
        <div className='home'>
            <div className='inp-field'>
                <input className='input-title'
                    type='text'
                    placeholder='Enter Title Here . . .'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <button onClick={createPaste} id='create-btn'>{pasteId ? 'Update My Note' : 'Create My Note'}</button>
            </div>
            <div>
                <textarea className='content'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    rows={19} placeholder='Write Your Content Here . . .' />
            </div>
        </div>
    )
}
export default Home;

// git init
// git remote add origin <git link>
// echo node_modules/ > .gitignore // checking gitingore presenr or not 
// git add .
// git commit -m "first commit"
// git config --global user.email "madhusudansharam2324@gmail.com"
// git config --global user.name "madhur2025"
// git branch -M main
// git push -u origin main