import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import InsertFeedback from './components/InsertFeedback'
import FeedbackList from './components/FeedbackList'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<InsertFeedback/>} />
        <Route path="/insert" element={<FeedbackList />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  )
}

export default App
