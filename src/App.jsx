import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Create from "../src/components/Create"
import Show from "../src/components/Show"
import ViewNote from "../src/components/ViewNote"
import About from "./components/About"

export default function App() {
  return (
    <Router>
      <div className="flex flex-col">
        <nav className="bg-gray-100 w-full h-14 flex justify-between items-center px-4 sm:px-32 shadow-md">

          <h1 className="text-xl sm:text-2xl text-indigo-700" ><Link to="/about">NoteSafe</Link></h1>

          <ul className="flex gap-x-5 sm:gap-x-10">
            <li><Link to="/" className="text-indigo-600 text-md sm:text-lg hover:text-black hover:scale-105 transition-all duration-300" >Create</Link></li>
            <li> <Link to="/notes" className="text-indigo-600 text-md sm:text-lg hover:text-black hover:scale-105 transition-all duration-300" >Notes</Link></li>
    
          </ul>
        </nav>

        <main className="flex-grow w-full flex justify-center px-2 sm:px-0">
          <Routes>
            <Route path="/" element={<Create />} />
            <Route path="/notes" element={<Show />} />
            <Route path="/note/:id" element={<ViewNote />} />
            <Route path="/about" element={<About/>}/>
          </Routes>
        </main>
        <footer className="w-full flex flex-col items-center">
          <p className="text-sm">NoteSafe © 2025 All rights reserved</p>
          <Link to="/about" className="text-sm text-gray-900">About Us - Help - Contact</Link>
        </footer>
      </div>
    </Router>
  )
}
