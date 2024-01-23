import './App.css';
import "./index.css"
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout/Layout';
import Add from "./pages/add/Add"
import Wish from './pages/wish/wish.jsx';
import Detail from './pages/detail/Detail.jsx';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/wish' element={<Wish/>} />
        <Route path='/detail/:id' element={<Detail/>} />

      
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
