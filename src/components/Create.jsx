// import { useDispatch, useSelector } from "react-redux"
// import { addNote } from "../Slices/NoteSlice"
// import { useEffect, useState } from "react"
// import { nanoid } from "@reduxjs/toolkit"
// import { toast, ToastContainer } from "react-toastify"
// import 'react-toastify/dist/ReactToastify.css'

// export default function Create() {

//     const [noteData, setNoteData] = useState({ title: '', content: '' })
//     const dispatch = useDispatch()
//     const allNotes = useSelector((state) => state.notes.notes)

//     function handleAddNote() {
//         if (!noteData.title.trim() && !noteData.content.trim()) {
//             toast.warning("Note can not be empty ! ")
//             return
//         }
//         const fullNote = { ...noteData, id: nanoid(), createAt: new Date().toISOString() }
//         dispatch(addNote(fullNote)) // breaking point
//         toast.success("Note created successfully.")
//         setNoteData({ title: '', content: '' })
//     }

//     useEffect(() => {
//         localStorage.setItem("notes", JSON.stringify(allNotes))
//     }, [allNotes])

//     return (
//         <div className="sm:w-285 min-w-90 min-h-125 mt-5">
//             <ToastContainer position="top-right" />
//             <section className="sm:w-full flex justify-between">
//                 <input
//                     type="text"
//                     value={noteData.title}
//                     onChange={(e) => setNoteData({ ...noteData, title: e.target.value })}
//                     placeholder="Enter note title . . . "
//                     className="sm:w-245 min-w-60 sm:h-12 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-500 ease-in-out" />

//                 <button
//                     onClick={handleAddNote}
//                     className="sm:w-35 min-w-28 rounded-lg transition-all ease-in-out duration-400 bg-indigo-600 text-white cursor-pointer hover:scale-105">Create Note
//                 </button>
//             </section>

//             <textarea
//                 type="text"
//                 value={noteData.content}
//                 onChange={(e) => setNoteData({ ...noteData, content: e.target.value })}
//                 placeholder="Enter note content . . ."
//                 className="mt-3 p-5 sm:w-full min-w-full min-h-110 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ease-in-out duration-500">
//             </textarea>
//         </div>
//     )
// }
import { useDispatch, useSelector } from "react-redux"
import { addNote } from "../Slices/NoteSlice"
import { useEffect, useState } from "react"
import { nanoid } from "@reduxjs/toolkit"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default function Create() {
    const [noteData, setNoteData] = useState({ title: '', content: '' })
    const dispatch = useDispatch()
    const allNotes = useSelector((state) => state.notes.notes)

    function handleAddNote() {
        if (!noteData.title.trim() && !noteData.content.trim()) {
            toast.warning("Note can not be empty!")
            return
        }
        const fullNote = { ...noteData, id: nanoid(), createAt: new Date().toISOString() }
        dispatch(addNote(fullNote))
        toast.success("Note created successfully.")
        setNoteData({ title: '', content: '' })
    }

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(allNotes))
    }, [allNotes])

    return (
        <div className="sm:w-285 min-w-90 min-h-125 mt-5 mx-auto px-4">
            <ToastContainer position="top-right" />
            <section className="w-full flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between">
                <input
                    type="text"
                    value={noteData.title}
                    onChange={(e) => setNoteData({ ...noteData, title: e.target.value })}
                    placeholder="Enter note title . . . "
                    className="sm:w-245 w-full sm:h-12 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-500 ease-in-out"
                />

                <button
                    onClick={handleAddNote}
                    className="sm:w-35 w-full sm:ml-3 h-12 rounded-lg transition-all ease-in-out duration-400 bg-indigo-600 text-white cursor-pointer hover:scale-105"
                >
                    Create Note
                </button>
            </section>

            <textarea
                value={noteData.content}
                onChange={(e) => setNoteData({ ...noteData, content: e.target.value })}
                placeholder="Enter note content . . ."
                className="mt-3 p-5 w-full min-h-159 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ease-in-out duration-500 whitespace-pre-wrap"
            />
        </div>
    )
}
