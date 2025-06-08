import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { updateNote } from "../Slices/NoteSlice"
export default function EditNote (){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
    const notes = useSelector((state)=>state.notes.notes)
    const existNote = notes.find((note)=>String(note.id) === String(id))

    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')

    useEffect(()=>{
        if(existNote){
            setTitle(existNote.title)
            setContent(existNote.content)
        }
    },[existNote])
    function handleEdit(){
        if(!title || !content){
            alert("Title and content required.")
            return
        }
        dispatch(updateNote({id,title,content}))
        navigate("/notes")
    }
    return (
        <div className="sm:w-285 min-w-90 mt-5 mx-auto px-4">
            <section className="w-full flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between">
                <input
                    type="text"
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                    placeholder="Enter note title . . . "
                    className="sm:w-245 w-full sm:h-12 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-500 ease-in-out"
                />

                <button
                    onClick={handleEdit}
                    className="sm:w-35 w-full sm:ml-3 h-12 rounded-lg transition-all ease-in-out duration-400 bg-indigo-600 text-white cursor-pointer hover:scale-105"
                >
                    Edit Note
                </button>
                <button
                    onClick={()=>navigate("/notes")}
                    className="sm:w-35 w-full sm:ml-3 h-12 rounded-lg transition-all ease-in-out duration-400 bg-gray-500 text-white cursor-pointer hover:scale-105 hover:border hover:border-gray-500 hover:text-gray-500 hover:bg-gray-200"
                >
                    Cancel
                </button>
            </section>

            <textarea
                value={content}
                onChange={(e)=>{setContent(e.target.value)}}
                placeholder="Enter note content . . ."
                className="mt-3 p-5 w-full min-h-110 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ease-in-out duration-500 whitespace-pre-wrap"
            />
        </div>
    )
}