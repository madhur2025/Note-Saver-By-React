import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export default function ViewNote() {
    const { id } = useParams()
    const [note, setNote] = useState({})
    const savedNotes = useSelector((state) => state.notes.notes)

    useEffect(() => {
        const found = savedNotes.find((item) => item.id === id)
        setNote(found)
    }, [id, savedNotes])

    function formatTime(time) {
        const dateObj = new Date(time)
        const now = new Date()
        const diff = Math.floor((now - dateObj) / 1000)
        const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

        if (diff < 60) return rtf.format(-diff, 'second')
        if (diff < 3600) return rtf.format(-Math.floor(diff / 60), 'minute')
        if (diff < 86400) return rtf.format(-Math.floor(diff / 3600), 'hour')
        if (diff < 604800) return rtf.format(-Math.floor(diff / 86400), 'day')

        return dateObj.toLocaleDateString()
    }

    return (
        <div className="sm:w-285 min-w-90 min-h-125 mt-5 mb-5 mx-auto px-4">
            <div className="w-full h-12 border border-gray-300 rounded-md p-2 flex items-center justify-between">
                <h2 className="text-lg text-indigo-600">{note?.title}</h2>
                <p className="text-gray-700 text-sm">{note?.createAt && formatTime(note.createAt)}</p>
            </div>

            <div className="mt-3 w-full min-h-100 p-5 rounded-md border border-gray-300">
                <p className="whitespace-pre-wrap">{note?.content}</p>
            </div>
        </div>
    )
}
