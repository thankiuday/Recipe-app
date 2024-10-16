import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import HomePage from "./components/pages/HomePage"
import Favorites from "./components/pages/Favorites"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
    <div className="flex">
      <Sidebar/>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
      <ToastContainer/>
    </div>
    </>
  )
}

export default App
