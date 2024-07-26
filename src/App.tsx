import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Ranking from './pages/ranking'
import Layout from './components/layouts/layout'
import Login from './pages/login'
import Games from './pages/games'
import NotFound from './pages/404'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/ranking" element={<Ranking />} />
        </Route>
        <Route path="/login" element={<Login />}/>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

