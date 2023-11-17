import './App.css'
import { LogoutPage } from './pages/LogoutPage'
import { MainPage } from './pages/MainPage'
import { Routes, Route } from 'react-router-dom'
import { NotFoundPage } from './pages/NotFoundPage'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/loggedout' element={<LogoutPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
