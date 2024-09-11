import './App.css'
import FormContainer from './components/FormContainer'
import Display from './components/Display'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom' 

function App() {

  return (
    <div className='main-container'>
      <Router>
        <Routes>
          <Route path="/" element={<FormContainer />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
