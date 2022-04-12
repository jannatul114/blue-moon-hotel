
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Special from './components/Special/Special';
import Signin from './components/Signin/Signin';
import Login from './components/Login/Login';
import Rooms from './components/Rooms/Rooms';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/rooms' element={<Rooms></Rooms>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/special' element={<Special></Special>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
