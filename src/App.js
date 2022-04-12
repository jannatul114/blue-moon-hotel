import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Room from './components/Room/Room';
import About from './components/About/About';
import Special from './components/Special/Special';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/rooms' element={<Room></Room>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/special' element={<Special></Special>}></Route>
      </Routes>
    </div>
  );
}

export default App;
