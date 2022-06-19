import './App.css';
import MyNavbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import Details from './pages/Details';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const  App = () => {
  return (
    <div className="App">
<<<<<<< HEAD
     <MyNavbar />
     <Profile />
=======
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search/:query' element={<Search />} />
          <Route path='/details/:id' element={<Details />} />
        </Routes>
      </BrowserRouter>
>>>>>>> ce1567c264ad85ebf167ee5b86dd01192c9d4f7c
    </div>
  );
}

export default App;
