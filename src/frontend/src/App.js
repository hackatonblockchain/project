import './App.css';
import MyNavbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';

const  App = () => {
  return (
    <div className="App">
     <MyNavbar />
     <Profile />
    </div>
  );
}

export default App;
