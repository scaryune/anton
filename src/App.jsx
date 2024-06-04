import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home.jsx';
import About from './pages/about/about.jsx'
import Login from './pages/login/login.jsx'
import Register from './pages/register/register.jsx'
import Data from './pages/data/dee.jsx'
import Hacktons from './pages/hacktons/hacktons.jsx'
import HackathonDetails from './pages/hacktons/hacktonsdetails.jsx'; // Create this component for individual hackathon details
import Header from './components/header/header.jsx';


function show(){

}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/about"  element={<About/>}></Route>
        <Route path="/hacktons" element={<Hacktons/>}></Route>
        <Route path="/hacktons/:id" element={HackathonDetails} />
        <Route path="/data" element={<Data/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login"  element={<Login/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
