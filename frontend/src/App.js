import React, { useState } from 'react'
import ReviewList from "./components/Reviews/reviewList"
import InitUser from './components/Auth/init'
import 'bootstrap/dist/css/bootstrap.css'
import Nav from './components/Nav/nav'
import Footer from './components/Footer/footer'
import RestaurantDetail from "./components/Restaurant/detail"
import RestaurantList from "./components/Home/restaurantlist"
import HomePage from './pages/Home'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Search from './components/Search/search'
import Manager from './components/Manager/manager'
import ManageReastaurant from './components/Manager/ManageRestaurant'

export const Context = React.createContext()

const App = () => {
  const [signedIn, setSignedIn] = useState("")
  const [role, setRole] = useState("")
      
  return (
    <Router>
      <Context.Provider value={[signedIn, setSignedIn, role, setRole]} className="App">
          <Nav />
          <Routes>
            <Route path="/restaurant/:name" element={<RestaurantDetail />} />
            <Route path="/manage/:name" element={<ManageReastaurant />} />
            <Route path="/manager/" element={<Manager />} />
            <Route path="/search/" element={<Search />} />
            <Route path='/' element={<HomePage />} />
            <Route path="/init" element={<InitUser />}/>
          </Routes>

      </Context.Provider>
    </Router>
  )
}

export default App;
