import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import AlsoLike from './Components/Home/AlsoLike';

function App() {
  return (
    <div style={{backgroundColor:'#EFF2F5'}}> 
      <Navbar/>
      <Home/>
      <AlsoLike/>
    </div>
  );
}

export default App;
