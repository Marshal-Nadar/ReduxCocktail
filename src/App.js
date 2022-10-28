import './App.css';
import Home from './Pages';
import { Route, Routes } from 'react-router-dom';
import SingleCocktail from './Pages/SingleCocktail';
import Header from './Components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cocktail/:id' element={<SingleCocktail />} />
      </Routes>
    </>
  );
}

export default App;
