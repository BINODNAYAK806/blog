// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import {
  // BrowserRouter as Router,
  // Routes,
  // Route }
// import {Routes,BrowserRoouter, Route} from "react-router-dom";
import Header from "./components/Header";

// import Home from './pages/home';
// import Blog from './pages/Blog';
// import AddEditBlog from './pages/AddEditBlog';
function App() {
  return (
    // <BrowserRoouter>
    <div className="App">

      <Header/>
       {/* <Routes  >

      <Route path='/' element={<Home/>} ></Route>
      <Route path='/blog/:id' element={<Blog/>} ></Route>
      <Route path='/addBlog' element={<AddEditBlog/>} ></Route>
      


      </Routes>  */}
    </div>
    /* </BrowserRoouter> */
  );
}

export default App;