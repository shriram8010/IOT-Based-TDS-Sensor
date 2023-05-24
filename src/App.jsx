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
import { ResultsState } from './context/ResultsState'
import ResultsHistory from './pages/ResultsHistory'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react'

function App() {
  const [progress, setProgress] = useState(0)

  return (
    <div className="App bg-darkbg">
      <ResultsState setProgress={setProgress}>
        <BrowserRouter>
          {/* h-8vh */}
          <Navbar />

          <LoadingBar
            color='#bef264'
            progress={progress}

          />

          <div className='min-h-[67vh]'>
            <Routes>
              <Route path='/' element={<Index />} />
              <Route path='/results' element={<Results />} />
              <Route path='/knowmore' element={<KnowMore />} />
              <Route path='/history' element={<ResultsHistory />} />
            </Routes>
          </div>

          {/* h-25vh */}
          <Footer />
        </BrowserRouter>
      </ResultsState>
    </div>
  )
}

export default App
