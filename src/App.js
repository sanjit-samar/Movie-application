import './App.css';
import Home from './components/MoviePage/home';
import Movie from './components/MovieCard/movieCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movie/:id' element={<Movie/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
