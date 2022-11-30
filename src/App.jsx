import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';


function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
