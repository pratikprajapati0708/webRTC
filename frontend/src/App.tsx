import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Sender } from './components/Sender'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/sender" element={<Sender/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
