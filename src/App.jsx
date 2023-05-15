import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Index from './pages/Index'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import Results from './pages/Results'
import KnowMore from './pages/KnowMore'

function App() {
  return (
    <div className="App bg-darkbg">
      <BrowserRouter>
        {/* h-8vh */}
        <Navbar />

        <div className='min-h-[67vh]'>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/results' element={<Results />} />
            <Route path='/knowmore' element={<KnowMore />} />
          </Routes>
        </div>

        {/* h-25vh */}
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
