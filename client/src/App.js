import React from 'react'
import NavBar from './Components/Header/NavBar'
import { SearchBar } from './Components/SearchBar';
import './StyleSheet/App.css';
import Banner from './Components/Banner'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HouseListingForm from './Components/HouseListingForm';
const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path='/' element={
          <div>
            <SearchBar />
            <Banner />
          </div>} />
    <Route path='/list-your-property' element={
          <div>
            <HouseListingForm />
          </div>} />  
    </Routes>
    </BrowserRouter>
  )
}

export default App












    // <div>
    //     <DesktopNavBar />
    //     <SearchBar />
    //     <Banner />
    // </div>