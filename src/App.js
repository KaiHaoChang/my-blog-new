import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';
import './style/style.css';


function App() {

  const [ isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
  console.log(isAuth);
  return (
    <BrowserRouter>
      <Nav isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path='/' element={< Home isAuth={isAuth} />} />
        <Route path='/Post' element={< Post isAuth={isAuth} />} />
        <Route path='/Login' element={< Login setIsAuth={setIsAuth} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
