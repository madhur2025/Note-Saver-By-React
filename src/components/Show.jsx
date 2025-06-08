import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteNote } from "../Slices/NoteSlice"

export default function Show() {
  const dispatch = useDispatch()
  const [searchQuery, setSearchName] = useState('')
  const navigate = useNavigate()
  const notes = useSelector((state) => state.notes.notes)

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

  function handleViewNote(note) {
    navigate(`/note/${note.id}`)
  }

  function handleCopy(note) {
    navigator.clipboard.writeText(note?.content)
  }

  function handleDelete(note) {
    dispatch(deleteNote(note))
  }

  const searchData = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  )
  const dataToRender = searchData.length > 0 ? searchData : notes

  return (
    <div className="sm:w-285 min-w-90 min-h-173 mt-5 mx-auto px-4 mb-5">
      <section className="mb-3">
        <input
          placeholder="Search title . . ."
          value={searchQuery}
          onChange={(e) => setSearchName(e.target.value)}
          className="w-full h-12 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-500 ease-in-out"
        />
      </section>

      <div className="space-y-4">
        {dataToRender.length === 0 ? (
          <p className="text-gray-500 text-center">No notes available!</p>
        ) : (
          dataToRender.map((note) => (
            <div
              key={note.id}
              className="border border-gray-300 rounded-lg p-4 transition-all ease-in-out duration-500 hover:shadow-md bg-white"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-semibold text-indigo-600 break-words">{note.title}</h2>
                  <p className="text-gray-500 text-sm">{formatTime(note.createAt)}</p>
                </div>
                <div className="flex flex-wrap gap-2 justify-start sm:justify-end">
                  <button
                    className="bg-indigo-600 px-3 py-1 rounded text-white hover:bg-white hover:text-indigo-600 border border-indigo-600 transition-all duration-300"
                    onClick={() => handleViewNote(note)}
                  >
                    View
                  </button>
                  <button
                    className="bg-indigo-600 px-3 py-1 rounded text-white hover:bg-white hover:text-indigo-600 border border-indigo-600 transition-all duration-300"
                    onClick={() => handleCopy(note)}
                  >
                    Copy
                  </button>
                  <button
                    className="bg-red-500 px-3 py-1 rounded text-white hover:bg-white hover:text-red-500 border border-red-500 transition-all duration-300"
                    onClick={() => handleDelete(note)}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <p className="mt-3 whitespace-pre-wrap text-gray-800 min-h-7 max-h-18 overflow-hidden">{note.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
