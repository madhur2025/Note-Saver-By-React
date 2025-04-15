import './App.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './components/Home';
import Pastes from './components/Pastes';
import ViewPaste from './components/ViewPaste';
const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<div><Navbar/><Home/></div>
    },
    {
      path:"/pastes",
      element:<div><Navbar/><Pastes/></div>
    },
    {
      path:"/pastes/:id",
      element:<div><Navbar/><ViewPaste/></div>
    }
  ]
)

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

// step 1 : install redux toolkit : npm install @reduxjs/toolkit react-redux
// step 2 : create a store.js in src
// step 3 : import store and provider into index.js so every child of app.js can access the store
// step 4 : create a slice reducer where we write actions
// step 5 : add slice reducer in store
// step 6 : create routes to home and other
// step 7 : create components
// step 8 : create navbar and add links to there
// step 9 : create form to add data