// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
// import Create from "../src/components/Create"
// import Show from "../src/components/Show"
// import ViewNote from "../src/components/ViewNote"

// export default function App() {
//   return (
//       <Router>
//     <div className="flex flex-col items-center">
//         <nav className="bg-gray-100 w-full h-12 flex justify-between items-center sm:px-30 px-3 shadow">
//           <h1 className="sm:text-2xl text-xl">NoteSafe</h1>
//           <ul className="flex sm:gap-x-10 gap-x-5">
//             <li>
//               <Link to="/" className="sm:text-lg text-md text-indigo-600 hover:text-black hover:scale-110 ease-in-out duration-300">Create</Link>
//             </li>
//             <li>
//               <Link to="/notes" className="sm:text-lg text-md text-indigo-600 hover:text-black hover:scale-110 ease-in-out duration-100">Notes</Link>
//             </li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Create />} />
//           <Route path="/notes" element={<Show />} />
//           <Route path="/note/:id" element={<ViewNote />} />
//         </Routes>
//     </div>
//       </Router>
//   )
// }
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Create from "../src/components/Create"
import Show from "../src/components/Show"
import ViewNote from "../src/components/ViewNote"

export default function App() {
  return (
    <Router>
      <div className="flex flex-col">
        <nav className="bg-gray-100 w-full h-14 flex justify-between items-center px-4 sm:px-32 shadow-md">
          <h1 className="text-xl sm:text-2xl text-indigo-700">NoteSafe</h1>
          <ul className="flex gap-x-5 sm:gap-x-10">
            <li>
              <Link
                to="/"
                className="text-indigo-600 text-md sm:text-lg hover:text-black hover:scale-105 transition-all duration-300"
              >
                Create
              </Link>
            </li>
            <li>
              <Link
                to="/notes"
                className="text-indigo-600 text-md sm:text-lg hover:text-black hover:scale-105 transition-all duration-300"
              >
                Notes
              </Link>
            </li>
          </ul>
        </nav>

        <main className="flex-grow w-full flex justify-center px-2 sm:px-0">
          <Routes>
            <Route path="/" element={<Create />} />
            <Route path="/notes" element={<Show />} />
            <Route path="/note/:id" element={<ViewNote />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
